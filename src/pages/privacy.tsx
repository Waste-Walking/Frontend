import React from "react"

import { Header, Footer } from "@components"

const Privacy: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="imprint container">
                <div className="headline-container">
                    <div className="header-marker"></div>
                    <h1 className="text-center section-header">
                        Datenschutzerklärung
                    </h1>
                </div>
                <div className="part">
                    <h2 className="headline">Datenschutz</h2>
                    <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                        persönlichen Daten sehr ernst. Wir behandeln Ihre
                        personenbezogenen Daten vertraulich und entsprechend der
                        gesetzlichen Datenschutzvorschriften sowie dieser
                        Datenschutzerklärung. ‍ Die Nutzung unserer Webseite ist
                        in der Regel ohne Angabe personenbezogener Daten
                        möglich. Soweit auf unseren Seiten personenbezogene
                        Daten (beispielsweise Name, Anschrift oder
                        E-Mail-Adressen) erhoben werden, erfolgt dies, soweit
                        möglich, stets auf freiwilliger Basis. Diese Daten
                        werden ohne Ihre ausdrückliche Zustimmung nicht an
                        Dritte weitergegeben. ‍ Wir weisen darauf hin, dass die
                        Datenübertragung im Internet (z.B. bei der Kommunikation
                        per E-Mail) Sicherheitslücken aufweisen kann. Ein
                        lückenloser Schutz der Daten vor dem Zugriff durch
                        Dritte ist nicht möglich.
                    </p>
                </div>
                <div className="part">
                    <h2 className="headline">Auskunft, Löschung, Sperrung</h2>
                    <p>
                        Sie haben jederzeit das Recht auf unentgeltliche
                        Auskunft über Ihre gespeicherten personenbezogenen
                        Daten, deren Herkunft und Empfänger und den Zweck der
                        Datenverarbeitung sowie ein Recht auf Berichtigung,
                        Sperrung oder Löschung dieser Daten. Hierzu sowie zu
                        weiteren Fragen zum Thema personenbezogene Daten können
                        Sie sich jederzeit unter der im Impressum angegebenen
                        Adresse an uns wenden.
                    </p>
                </div>
                <div className="part">
                    <h2 className="headline">Auskunft, Löschung, Sperrung</h2>
                    <p>
                        Der Provider der Seiten erhebt und speichert automatisch
                        Informationen in so genannten Server-Log Files, die Ihr
                        Browser automatisch an uns übermittelt. Dies sind:
                        <ul>
                            <li>Browsertyp / Browserversion</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                        </ul>
                        Diese Daten sind nicht bestimmten Personen zuordenbar.
                        Eine Zusammenführung dieser Daten mit anderen
                        Datenquellen wird nicht vorgenommen. Wir behalten uns
                        vor, diese Daten nachträglich zu prüfen, wenn uns
                        konkrete Anhaltspunkte für eine rechtswidrige Nutzung
                        bekannt werden.
                    </p>
                </div>
                <div className="part">
                    <h2 className="headline">Widerspruch Werbe-Mails</h2>
                    <p>
                        Der Nutzung von im Rahmen der Impressumspflicht
                        veröffentlichten Kontaktdaten zur Übersendung von nicht
                        ausdrücklich angeforderter Werbung und
                        Informationsmaterialien wird hiermit widersprochen. Die
                        Betreiber der Seiten behalten sich ausdrücklich
                        rechtliche Schritte im Falle der unverlangten Zusendung
                        von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Privacy
