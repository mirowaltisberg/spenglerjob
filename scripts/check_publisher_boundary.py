"""Verify that unproven claims and undersized snapshots cannot be published."""

from datetime import date, timedelta
from pathlib import Path
import runpy


publisher = runpy.run_path(Path(__file__).with_name("publish-jobs.py"))
to_db_row = publisher["to_db_row"]
delete_stale_jobs = publisher["delete_stale_jobs"]
verify_required_schema = publisher["verify_required_schema"]
enforce_safety_threshold = publisher["enforce_safety_threshold"]
PipelineError = publisher["PipelineError"]
TRADE = publisher["TRADE"]
DEFAULT_MIN_JOBS = publisher["DEFAULT_MIN_JOBS"]
DEFAULT_MIN_RETENTION_RATIO = publisher["DEFAULT_MIN_RETENTION_RATIO"]

fixture = {
    "trade": "spengler",
    "id": "scraped-spengler-56d2b5f33084",
    "title": "Spengler EFZ",
    "company": "Private employer",
    "location": "Zürich, Zürich",
    "type": "Vollzeit",
    "workload": "100%",
    "description": "Controlled test data",
    "datePosted": "2026-08-20",
    "jobUrl": "https://jobs.example.ch/spengler-1",
    "source": "indeed",
    "salary": "untrusted display text",
    "salaryMin": 72000,
    "salaryMax": 84000,
    "salaryCurrency": "CHF",
    "salaryUnit": "YEAR",
    "isRemote": True,
}

row = to_db_row(fixture, date(2026, 8, 20))
assert row["salary"] == "CHF 72'000 – 84'000", "source salary display was not regenerated"
assert row["salary_min"] == 72000
assert row["salary_max"] == 84000
assert row["salary_currency"] == "CHF"
assert row["salary_unit"] == "YEAR"
assert row["is_remote"] is True, "explicit remote status was unexpectedly discarded"
assert row["type"] == "Vollzeit", "explicit job type was unexpectedly discarded"
assert row["workload"] == "100%", "explicit workload was unexpectedly discarded"

unsafe_salary = to_db_row(
    {**fixture, "salaryCurrency": "EUR", "salaryMin": 999999},
    date(2026, 8, 20),
)
assert unsafe_salary["salary"] is None
assert unsafe_salary["salary_min"] is None
assert unsafe_salary["salary_currency"] is None


class FakeSchemaQuery:
    def __init__(self):
        self.selected = None
        self.limited = None

    def select(self, columns):
        self.selected = columns
        return self

    def limit(self, value):
        self.limited = value
        return self

    def execute(self):
        assert self.selected == "trade,total_jobs"
        assert self.limited == 1
        return type("Response", (), {"data": []})()


class FakeSchemaClient:
    def table(self, name):
        assert name == "trade_scrape_metadata"
        return FakeSchemaQuery()


verify_required_schema(FakeSchemaClient())


class FakeDeleteQuery:
    def __init__(self, operations):
        self.operations = operations
        self.trade = None
        self.ids = None

    def delete(self, returning):
        assert returning == "minimal"
        return self

    def eq(self, column, value):
        assert column == "trade"
        self.trade = value
        return self

    def in_(self, column, values):
        assert column == "id"
        self.ids = list(values)
        return self

    def execute(self):
        self.operations.append((self.trade, self.ids))
        return type("Response", (), {"data": []})()


class FakeDeleteClient:
    def __init__(self):
        self.operations = []

    def table(self, name):
        assert name == "jobs"
        return FakeDeleteQuery(self.operations)


client = FakeDeleteClient()
delete_stale_jobs(
    client,
    {
        f"scraped-{TRADE}-000000000001",
        "legacy-generated-row",
    },
)
assert client.operations == [
    (
        TRADE,
        ["legacy-generated-row", f"scraped-{TRADE}-000000000001"],
    )
], "publisher did not prune the exact trade-scoped stale-ID set"

try:
    delete_stale_jobs(client, {"bad\njob-id"})
except PipelineError:
    pass
else:
    raise AssertionError("publisher accepted a control character in a stale ID")



def assert_threshold_blocked(
    fresh_count: int,
    existing: dict[str, date | None],
    cutoff: date,
) -> None:
    try:
        enforce_safety_threshold(
            fresh_count,
            existing,
            cutoff,
            DEFAULT_MIN_JOBS,
            DEFAULT_MIN_RETENTION_RATIO,
        )
    except PipelineError:
        return
    raise AssertionError("publisher accepted an undersized snapshot")


cutoff = date(2026, 8, 20) - timedelta(days=35)
assert DEFAULT_MIN_JOBS == 15, "the measured Spengler baseline changed without a test update"
enforce_safety_threshold(
    DEFAULT_MIN_JOBS,
    {},
    cutoff,
    DEFAULT_MIN_JOBS,
    DEFAULT_MIN_RETENTION_RATIO,
)
assert_threshold_blocked(DEFAULT_MIN_JOBS - 1, {}, cutoff)

# A larger recent inventory raises the effective floor above the absolute
# default, proving that the measured trade floor does not weaken retention.
recent_existing = {
    f"scraped-spengler-retention-{index}": date(2026, 8, 20)
    for index in range(40)
}
enforce_safety_threshold(
    20,
    recent_existing,
    cutoff,
    DEFAULT_MIN_JOBS,
    DEFAULT_MIN_RETENTION_RATIO,
)
assert_threshold_blocked(19, recent_existing, cutoff)

print("Publisher boundary check passed.")
