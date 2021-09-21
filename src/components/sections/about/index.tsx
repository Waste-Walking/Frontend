import React, { CSSProperties } from "react"
import { Container } from "react-bootstrap"
import { Button } from "@components"

import styles from "./about.module.scss"

export const About: React.FC = () => {
    return (
        <Container id="ueber-uns" className="section not-full">
            <div className="headline-container">
                <div className="header-marker"></div>
                <h2 className="text-center section-header">Über uns</h2>
            </div>
            <div className="flex-container">
                <div className="grid-half">
                    <p className="paragraph">
                        Bereits heute gibt es engagierte Bürgerinnen und Bürger,
                        die vereinzelt Müllsammel-Aktionen organisieren und sich
                        dafür einsetzen, unsere Umwelt sauber zu halten. Leider
                        gibt es bislang keine digitale Plattform, auf der sich
                        Interessierte zusammenfinden und organisieren können –
                        Stattdessen werden Aktionen über lokale Aufrufe in
                        Zeitungsartikeln oder ähnlichen – in Reichweite
                        begrenzten Medien - geplant, wodurch eine erhebliche
                        Menge der Bevölkerung nicht erreicht wird.
                    </p>
                    <p className="highlight">
                        "Leider gibt es bislang keine digitale Plattform, auf
                        der sich Interessierte zusammenfinden und organisieren
                        können."
                    </p>
                    <p className="paragraph">
                        Aus eigener Erfahrung und Gesprächen mit mehreren
                        Organisatorinnen und Organisatoren solcher Aktionen
                        wissen wir zudem, wie schwer es ganz allgemein ist,
                        Bürgerinnen und Bürger zum Sammeln von Müll in ihrer
                        eigenen Umgebung zu überzeugen. Um dem vorherrschenden
                        Problem des Alltagsmülls langfristig entgegenzutreten,
                        muss eine breitere Aufmerksamkeit und ein generelles
                        Bewusstsein in der Gesellschaft dafür geschaffen werden.
                    </p>
                </div>
                <div className="grid-half">
                    <p className="paragraph">
                        Aus diesen Gründen besteht unser Ansatz darin, eine
                        digitale Plattform in Form einer (Web-)Applikation für
                        genau diesen Zweck zur Verfügung zu stellen. Hierüber
                        können Städte, Kommunen und Privatpersonen selbst
                        Aktionen planen, einstellen und alle weiteren
                        Müllsammelnden im Umkreis darüber informieren.
                        Gleichzeitig dient diese Plattform als zentrale
                        Informationsquelle für die Organisation rund um die
                        eingestellten Aktionen.
                    </p>
                    <p className="highlight">
                        "Um dem vorherrschenden Problem des Alltagsmülls
                        langfristig entgegenzutreten, muss eine breitere
                        Aufmerksamkeit und ein generelles Bewusstsein in der
                        Gesellschaft dafür geschaffen werden."
                    </p>
                    <p className="paragraph">
                        Eine zentrale Timeline in der sowohl Müllfunde wie auch
                        Erfolge bei getätigten Aktionen in Text und Bild geteilt
                        werden können, dienen zusätzlich dazu andere zum
                        Müllsammeln zu motivieren und das Gefühl einer Community
                        mit einer gemeinsamen Vision zu stärken. Die
                        geografische Nähe spielt bei diesem Ansatz eine große
                        Rolle, so dass Beiträge bevorzugt für Nutzer in
                        ähnlichen Lokalitäten ausgespielt werden.
                    </p>
                </div>
            </div>
            <div className={styles.download}>
                <a
                    download
                    className="btn btn-primary"
                    href="/WasteWalking_Konzept.pdf"
                    target="_blank"
                >
                    Konzept runterladen
                </a>
            </div>
        </Container>
    )
}
