import React from "react"

import { Header, Footer } from "@components"

const Imprint: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="imprint container">
                <div className="headline-container">
                    <div className="header-marker"></div>
                    <h1 className="text-center section-header">Impressum</h1>
                </div>
                <div className="part">
                    <h2 className="headline">Angaben gemäß § 5 TMG</h2>
                    <p>
                        Ökologisch-Demokratische Partei (ÖDP)<br></br>
                        vertreten durch den Bundesvorsitzenden Christian
                        Rechholz<br></br>
                        Bundesgeschäftsstelle<br></br>Pommergasse 1<br></br>
                        97070 Würzburg<br></br>
                    </p>
                </div>
                <div className="part">
                    <h2 className="headline">Kontakt</h2>
                    <p>
                        Telefon 0931 / 40486 0<br></br>Fax 0931 / 40486 29
                        <br></br>
                        <a
                            className="link"
                            href="mailto: github@oedp.de"
                        >
                            github@oedp.de
                        </a>
                    </p>
                </div>
                <div className="part">
                    <h2 className="headline">
                        Hinweis auf EU-Streitschlichtung
                    </h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur
                        Online-Streitbeilegung (OS) bereit:&nbsp;
                        <a
                            className="link"
                            href="http://ec.europa.eu/consumers/odr"
                        >
                            http://ec.europa.eu/consumers/odr
                        </a>
                        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                </div>
                <div className="part">
                    <h2 className="headline">Haftung für Inhalte</h2>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                        eigene Inhalte auf diesen Seiten nach den allgemeinen
                        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                        als Diensteanbieter jedoch nicht verpflichtet,
                        übermittelte oder gespeicherte fremde Informationen zu
                        überwachen oder nach Umständen zu forschen, die auf eine
                        rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                        Entfernung oder Sperrung der Nutzung von Informationen
                        nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                        Eine diesbezügliche Haftung ist jedoch erst ab dem
                        Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                        möglich. Bei Bekanntwerden von entsprechenden
                        Rechtsverletzungen werden wir diese Inhalte umgehend
                        entfernen.
                    </p>
                </div>
                <div className="part">
                    <h2 className="headline">Haftung für Links</h2>
                    <p>
                        Unser Angebot enthält Links zu externen Webseiten
                        Dritter, auf deren Inhalte wir keinen Einfluss haben.
                        Deshalb können wir für diese fremden Inhalte auch keine
                        Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
                        ist stets der jeweilige Anbieter oder Betreiber der
                        Seiten verantwortlich. Die verlinkten Seiten wurden zum
                        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                        überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                        Verlinkung nicht erkennbar. Eine permanente inhaltliche
                        Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                        Bekanntwerden von Rechtsverletzungen werden wir
                        derartige Links umgehend entfernen.
                    </p>
                </div>
                <div className="part">
                    <h2 className="headline">Urheberrecht</h2>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und
                        Werke auf diesen Seiten unterliegen dem deutschen
                        Urheberrecht. Die Vervielfältigung, Bearbeitung,
                        Verbreitung und jede Art der Verwertung außerhalb der
                        Grenzen des Urheberrechtes bedürfen der schriftlichen
                        Zustimmung des jeweiligen Autors bzw. Erstellers.
                        Downloads und Kopien dieser Seite sind nur für den
                        privaten, nicht kommerziellen Gebrauch gestattet. Soweit
                        die Inhalte auf dieser Seite nicht vom Betreiber
                        erstellt wurden, werden die Urheberrechte Dritter
                        beachtet. Insbesondere werden Inhalte Dritter als solche
                        gekennzeichnet. Sollten Sie trotzdem auf eine
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um
                        einen entsprechenden Hinweis. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Inhalte umgehend
                        entfernen.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Imprint
