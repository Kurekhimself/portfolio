import './Datenschutz.css'

export default function Datenschutz() {
  return (
    <section id="datenschutz" className="datenschutz">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="mono">//</span> Datenschutz
          </div>
          <h2 className="section-title">
            Datenschutzerklärung
          </h2>
        </div>

        <div className="datenschutz-content">
          <div className="datenschutz-section">
            <h3>1. Datenschutz auf einen Blick</h3>
            <h4>Allgemeine Hinweise</h4>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div className="datenschutz-section">
            <h3>2. Allgemeine Hinweise und Pflichtinformationen</h3>
            <h4>Datenschutz</h4>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>

          <div className="datenschutz-section">
            <h3>3. Datenerfassung auf dieser Website</h3>
            <h4>Server-Log-Dateien</h4>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
            </p>
          </div>

          <div className="datenschutz-section">
            <h3>4. Analyse-Tools und Tools von Drittanbietern</h3>
            <h4>Google Analytics</h4>
            <p>
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}