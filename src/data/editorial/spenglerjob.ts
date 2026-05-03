// SEO-DECISION: Per-page editorial content for the highest-traffic role × canton
// combinations. Keyed by `${roleSlug}::${cantonSlug}`. The category page renders
// EditorialIntro only when an entry exists here — pages without an entry fall back
// to the default short layout. Word target per section: ~80 words. Total per
// page: 320+. Swiss orthography only — never use Eszett, always "ss".

export interface EditorialContent {
  /** "Was macht ein/e ROLE in CANTON?" — concrete day-to-day, regional context */
  whatDoes: string;
  /** "Lohn & Aufstiegschancen" — salary band + progression. Deep-links to /#loehne */
  salary: string;
  /** "Welche Betriebe stellen ein?" — anonymized, never names specific companies */
  employers: string;
  /** "Bewerbungs-Tipps" — practical, regional (ÖV, Pendlerregion, Sprache) */
  applicationTips: string;
}

const ENTRIES: Record<string, EditorialContent> = {
  "spengler-efz::zh": {
    whatDoes:
      "Ein Spengler EFZ im Kanton Zürich wechselt täglich zwischen Werkstatt und Baustelle: Falzarbeiten und Zuschnitte an der Abkantbank, dann Montage von Dachrinnen, Kaminköpfen, Dachrandabschlüssen und Lüftungskanälen vor Ort. Verarbeitet werden Kupfer, Titanzink, Aluminium und Chromstahl. Die hohe Sanierungsdichte rund um die Stadt Zürich, Winterthur und das Limmattal sorgt für eine konstante Auftragslage bei Bau- und Werkstattspenglerei. Schweissen, Hartlöten und das saubere Falzen sind Grundhandwerk. Wer Höhentauglichkeit, Schwindelfreiheit und Wetterbeständigkeit mitbringt, hat im Kanton Zürich grosse Auswahl an Festanstellungen.",
    salary:
      "Ein Spengler EFZ verdient im Kanton Zürich typisch CHF 70'000 bis 82'000 pro Jahr — am oberen Ende des Schweizer Bands. Mit Vorarbeiterfunktion auf der Baustelle steigt das Salär um weitere 8 bis 12 Prozent. Der Aufstieg zum Polier Gebäudehülle (berufsbegleitend, 1 bis 2 Jahre) öffnet das Band CHF 85'000 bis 100'000. Wer den eidg. dipl. Spenglermeister anstrebt, landet im Kanton Zürich häufig im Bereich CHF 100'000 bis 125'000. Spezialisierungen auf Bauphysik oder Photovoltaik-Integration in die Gebäudehülle bringen Zulagen. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Zürich rekrutieren vor allem Spengler-KMU mit 8 bis 40 Mitarbeitenden — typische Familienbetriebe mit eigener Werkstatt und festem Bautrupp. Daneben besetzen Generalunternehmer Gebäudehülle und Polybau-Betriebe regelmässig Stellen für Sanierungsprojekte in den Stadtkreisen 1 bis 5 sowie für Wohnüberbauungen in Zürich-Nord, Zürich-West und im Glattal. Industriespenglereien rund um das Limmattal suchen für Lüftungs- und Apparatebau, Dachdeckerbetriebe für gemischte Steildach-Equipen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf spenglerjob.ch sind anonymisiert, der Arbeitgeber wird im Vorgespräch offengelegt.",
    applicationTips:
      "Lege Wert auf einen kompakten Lebenslauf mit klar gelisteten Materialerfahrungen (Kupfer, Titanzink, Chromstahl), bisherigen Objekttypen und einem Schweisspass mit aktueller Gültigkeit. Im Kanton Zürich wird tägliches Pendeln via S-Bahn erwartet — gib deinen ÖV-Knotenpunkt an statt nur den Wohnort, weil Baustellen wechseln. Höhentauglichkeit und Schwindelfreiheit explizit erwähnen, viele Betriebe filtern danach. Foto der EFZ-Urkunde als PDF-Anhang beschleunigt die Vorauswahl. Im Erstgespräch fragen Personalverantwortliche nach Wetterbeständigkeit, Führerausweis Kategorie B und Bereitschaft für Einsätze auf Steildächern; bereite ehrliche Antworten und Referenzobjekte vor.",
  },

  "bauspengler::be": {
    whatDoes:
      "Ein Bauspengler im Kanton Bern arbeitet vorwiegend draussen am Objekt: Dachrinnen und Fallrohre, Kaminköpfe, Dachrandabschlüsse, Anschlussbleche bei Lukarnen und Fassadenverkleidungen. Im Mittelland, im Berner Oberland und im Emmental prägt der grosse Bestand älterer Häuser den Auftragsmix — Sanierungswelle bei Steildächern und Holzfassaden. Verarbeitet werden hauptsächlich Titanzink und Aluminium, vereinzelt Kupfer für historische Objekte. Falzarbeiten, Schweissen und Hartlöten gehören zum Tagesgeschäft. Wer Höhentauglichkeit, Schwindelfreiheit und Wetterbeständigkeit mitbringt und längere Anfahrtswege akzeptiert, hat im Kanton Bern langfristig sichere Aufträge.",
    salary:
      "Ein Bauspengler verdient im Kanton Bern typisch CHF 68'000 bis 78'000 pro Jahr. Mit Vorarbeitererfahrung und sicherer Schweisskenntnis (gültiger Schweisspass) sind CHF 78'000 bis 88'000 realistisch. Der Aufstieg zum Polier Gebäudehülle (berufsbegleitende Weiterbildung, 1 bis 2 Jahre) öffnet das Band CHF 85'000 bis 100'000. Mit dem Schritt zum eidg. dipl. Spenglermeister landen erfahrene Berufsleute in Bern im Bereich CHF 95'000 bis 115'000. Berufsbegleitende Module über Polybau und suissetec werden von vielen Betrieben mitfinanziert. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Bern besetzen vor allem Spengler-KMU mit 5 bis 30 Mitarbeitenden den Grossteil der Stellen — viele davon traditionsreiche Familienbetriebe in Stadt und Agglomeration. Daneben suchen Generalunternehmer Gebäudehülle und Dachdeckerbetriebe gemischte Equipen für Sanierungsprojekte. Im Berner Oberland kommen saisonale Aufträge bei Hotels, Chalets und Bergbahnen dazu, Industriespenglereien im Mittelland brauchen Fachkräfte für Lüftungskanäle und Apparatebau. Lüftungsbauer und HLK-Betriebe besetzen Stellen für Werkstattspenglerei. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Bauspengler werden im Kanton Bern für Selbstständigkeit auf der Baustelle eingestellt — beton im Lebenslauf konkrete Objekttypen, Materialerfahrungen und gültigen Schweisspass. Die Pendelbereitschaft Richtung Berner Oberland oder Emmental prominent angeben, oft sind Einsätze 30 bis 60 Minuten vom Wohnort entfernt. Fahrausweis Kategorie B ist Pflicht, BE oder C1 ein Plus für grössere Servicefahrzeuge. Sehr gute Deutschkenntnisse und Mundartverständnis erleichtern den Berufsalltag im Berner Mittelland. Höhentauglichkeit, Schwindelfreiheit und Wetterbeständigkeit explizit erwähnen. Foto der EFZ-Urkunde sowie Belege für absolvierte Weiterbildungen bei Polybau oder suissetec als PDF beifügen.",
  },

  "flachdachspengler::ag": {
    whatDoes:
      "Ein Flachdachspengler im Kanton Aargau verlegt Abdichtungsbahnen, montiert Dachrandabschlüsse, Lichtkuppeln und Entwässerungssysteme — kombiniert mit klassischen Spenglerarbeiten an Anschlussblechen, Attikaverkleidungen und Lüftungskanälen. Der Tag wechselt zwischen Werkstattvorbereitung (Zuschnitte, Falzarbeiten an der Abkantbank) und Baustellenmontage. Im Aargau dominieren Industrie- und Gewerbebauten am Limmattal sowie in den Agglomerationsgemeinden Aarau, Baden, Brugg und Wettingen den Auftragsmix. Photovoltaik-Aufständerungen auf Flachdächern, Dachbegrünungen und energetische Sanierungen treiben die regionale Nachfrage stetig nach oben. Wer Schweisskenntnis (gültiger Schweisspass), Höhentauglichkeit und Wetterbeständigkeit mitbringt, hat in der Region kontinuierliche Beschäftigung über mehrere Jahre.",
    salary:
      "Ein Flachdachspengler verdient im Kanton Aargau typisch CHF 70'000 bis 82'000 pro Jahr. Mit Vorarbeiterfunktion und sicherer Beherrschung mehrerer Abdichtungssysteme (Bitumen, Kunststoff, Flüssigabdichtung) verschiebt sich der Marktwert in den Bereich CHF 80'000 bis 92'000. Spezialisierungen auf Photovoltaik-Integration, Dachbegrünung und energetische Sanierung bringen Zulagen von 5 bis 10 Prozent. Der Aufstieg zum Polybau-Spezialist oder Polier Gebäudehülle öffnet das Band CHF 90'000 bis 105'000. Berufsbegleitende Weiterbildungen über Polybau werden von vielen Aargauer Betrieben mitfinanziert. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Aargau besetzen mittelgrosse Spengler- und Polybau-KMU mit 10 bis 50 Mitarbeitenden den Grossteil der Stellen. Daneben suchen Generalunternehmer Gebäudehülle und Dachdeckerbetriebe für Industrie- und Logistikhallen am Limmattal regelmässig nach Flachdachspenglern. Industriespenglereien rund um Aarau und Brugg betreiben eigene Werkstattspenglerei für Lüftungskanäle und Apparatebau. Lüftungsbauer suchen Fachkräfte für Dachdurchführungen und Anschlussbleche. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf spenglerjob.ch sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Flachdachspengler werden im Kanton Aargau für Spezialwissen rund um Abdichtungssysteme und Anschlussdetails eingestellt — liste im Lebenslauf konkret die Systeme auf, mit denen du gearbeitet hast (Bitumen, FPO, PVC, Flüssigabdichtung). Belege für Polybau-Module und einen aktuellen Schweisspass beifügen. Pendelbereitschaft Richtung Zürich, Solothurn und Luzern ist im Aargau Standard — gib Pendelradius an. Fahrausweis Kategorie B ist Pflicht. Höhentauglichkeit, Schwindelfreiheit und Wetterbeständigkeit prominent erwähnen. Foto der EFZ-Urkunde als PDF anhängen, viele Betriebe filtern Inserate ohne sichtbaren Lehrabschluss heraus. Im Erstgespräch werden Detailkenntnisse und Termintreue vertieft abgefragt.",
  },

  "spengler-vorarbeiter::zg": {
    whatDoes:
      "Ein Spengler-Vorarbeiter im Kanton Zug führt eine kleine Equipe von zwei bis sechs Berufsleuten auf der Baustelle, verteilt die Arbeit, kontrolliert Qualität und Termine und ist Ansprechpartner für Bauleitung und Architekt. Praktisch heisst das: morgens Materialdisposition, tagsüber Bau- und Werkstattspenglerei mit den Mitarbeitenden — Dachrandabschlüsse, Kaminköpfe, Lüftungskanäle, Falzarbeiten — abends Aufmass und Rapportierung. Im Kanton Zug prägen hochwertige Wohnüberbauungen rund um Baar, Cham und Rotkreuz sowie anspruchsvolle Metallfassaden den Auftragsmix. Wer Schweisskenntnis, Höhentauglichkeit und Führungstalent mitbringt, hat in Zug überdurchschnittliche Aufstiegschancen.",
    salary:
      "Ein Spengler-Vorarbeiter verdient im Kanton Zug typisch CHF 80'000 bis 95'000 pro Jahr — am oberen Ende des Schweizer Bands. Mit mehrjähriger Führungserfahrung und Verantwortung für anspruchsvolle Sanierungsobjekte verschiebt sich der Marktwert in den Bereich CHF 90'000 bis 105'000. Der Aufstieg zum Polier Gebäudehülle (berufsbegleitend, 1 bis 2 Jahre) öffnet das Band CHF 95'000 bis 115'000. Mit dem Schritt zum eidg. dipl. Spenglermeister landen erfahrene Berufsleute in Zug im Bereich CHF 110'000 bis 135'000. Zuger Arbeitgeber zahlen oft marktführend, dafür wird Verlässlichkeit und Kundenorientierung erwartet. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Zug besetzen vor allem inhabergeführte Spengler-KMU mit 10 bis 50 Mitarbeitenden Vorarbeiter-Stellen — viele davon mit eigener Werkstatt und festem Bautrupp. Daneben suchen Generalunternehmer Gebäudehülle für hochwertige Wohnüberbauungen, Bürobauten und Industrieprojekte rund um Baar, Cham und Rotkreuz nach erfahrenen Equipen-Führern. Industriespenglereien betreiben Werkstattspenglerei für Lüftungs- und Apparatebau. Lüftungsbauer und HLK-Betriebe besetzen Stellen für Dachdurchführungen und Sonderanfertigungen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Spengler-Vorarbeiter werden im Kanton Zug für Führungstalent und Termintreue eingestellt — beton im Lebenslauf konkrete Equipen-Grössen, geleitete Projektvolumen und Referenzobjekte (anonymisiert). Personalverantwortliche prüfen explizit Schweisspass, Höhentauglichkeit und Schwindelfreiheit. Sehr gute Deutschkenntnisse sind Voraussetzung, weil Bauleitung und Bauherrschaft in Zug oft hochkarätig sind. Pendelbereitschaft via Zentralschweiz oder Zürich angeben, viele Berufsleute kommen aus den Nachbarkantonen. Fahrausweis Kategorie B ist Pflicht. Belege für Polybau- oder suissetec-Module sowie ein Foto der EFZ-Urkunde anhängen. Im Erstgespräch werden Konfliktfähigkeit und Erfahrung mit Subunternehmern vertieft abgefragt.",
  },

  "dachdecker-spengler::sg": {
    whatDoes:
      "Ein Dachdecker/Spengler im Kanton St. Gallen kombiniert Steildach-Eindeckung mit klassischer Bauspenglerei: morgens Ziegel oder Schindeln verlegen, nachmittags Dachrinnen, Kaminköpfe und Anschlussbleche montieren. Verarbeitet werden Titanzink, Aluminium und Kupfer, daneben verschiedene Eindeckungssysteme. In der Ostschweiz prägen die Sanierungswelle bei älteren Wohnhäusern, landwirtschaftliche Gebäude im St. Galler Rheintal sowie Tourismusobjekte am Walensee und in der Region Toggenburg den Auftragsmix. Falzarbeiten, Hartlöten und vereinzelt Schweissen gehören zum Tagesgeschäft. Wer Höhentauglichkeit, Schwindelfreiheit und Wetterbeständigkeit mitbringt, hat in St. Gallen kontinuierliche Auftragslage über das ganze Jahr.",
    salary:
      "Ein Dachdecker/Spengler verdient im Kanton St. Gallen typisch CHF 68'000 bis 80'000 pro Jahr. Mit Vorarbeitererfahrung, sicherer Schweisskenntnis (Schweisspass) und Spezialisierung auf historische Dächer oder Metalldächer sind CHF 80'000 bis 92'000 realistisch. Der Aufstieg zum Polier Gebäudehülle (berufsbegleitend, 1 bis 2 Jahre) öffnet das Band CHF 88'000 bis 102'000. Mit dem Schritt zum eidg. dipl. Spenglermeister oder Polybau-Meister landen erfahrene Berufsleute in der Ostschweiz im Bereich CHF 95'000 bis 115'000. Berufsbegleitende Module bei Polybau werden von vielen Ostschweizer Betrieben mitfinanziert. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton St. Gallen besetzen vor allem Spengler- und Dachdecker-KMU mit 5 bis 30 Mitarbeitenden den Grossteil der Stellen — oft langjährig geführte Familienbetriebe in St. Gallen, Wil, Rapperswil und im Rheintal. Daneben suchen Generalunternehmer Gebäudehülle für Sanierungsprojekte gemischte Equipen, Polybau-Betriebe für Flachdach- und Steildach-Kombinationen. Industriespenglereien im Rheintal brauchen Werkstattspenglerei für Lüftungs- und Apparatebau, Tourismusbetriebe am Walensee und im Toggenburg suchen saisonale Verstärkung. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf spenglerjob.ch sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Dachdecker/Spengler werden im Kanton St. Gallen für vielseitiges Können auf Steildach und in der Bauspenglerei eingestellt — beton im Lebenslauf beide Schwerpunkte und liste konkrete Eindeckungssysteme, Materialerfahrungen und einen aktuellen Schweisspass auf. Pendelbereitschaft Richtung Rheintal, Toggenburg oder Linthebene angeben, viele Baustellen liegen ausserhalb der Kantonshauptstadt. Fahrausweis Kategorie B ist Pflicht. Höhentauglichkeit, Schwindelfreiheit und Wetterbeständigkeit explizit erwähnen, weil ein grosser Teil der Arbeit auf Steildächern stattfindet. Foto der EFZ-Urkunde sowie Belege für Polybau-Weiterbildungen als PDF anhängen. Im Erstgespräch werden Erfahrungen mit historischen Objekten und Pendelbereitschaft vertieft abgefragt.",
  },
};

export function getEditorialContent(
  roleSlug: string,
  cantonSlug: string
): EditorialContent | null {
  return ENTRIES[`${roleSlug}::${cantonSlug}`] ?? null;
}

export const EDITORIAL_BYLINE = {
  name: "Redaktion spenglerjob.ch",
  href: "/team",
  /** ISO date — formatted at render time */
  publishedAt: "2026-05-02",
} as const;
