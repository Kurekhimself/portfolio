import './Impressum.css'

export default function Impressum() {
  return (
    <section id="impressum" className="impressum">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="mono">//</span> Impressum
          </div>
          <h2 className="section-title">
            Rechtliche Informationen
          </h2>
        </div>

        <div className="impressum-content">
          <div className="impressum-section">
            <h3>Angaben gemäß § 5 TMG</h3>
            <p>
              Laurenz Kurek<br />
              [Deine Straße]<br />
              [PLZ] [Ort]<br />
              Deutschland
            </p>
          </div>

          <div className="impressum-section">
            <h3>Kontakt</h3>
            <p>
              Telefon: [Deine Telefonnummer]<br />
              E-Mail: [Deine E-Mail-Adresse]
            </p>
          </div>

          <div className="impressum-section">
            <h3>Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div className="impressum-section">
            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}