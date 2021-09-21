import React, { CSSProperties } from "react"
import { Container } from "react-bootstrap"
import { Button } from "@components"

import styles from "./contribution.module.scss"

export const Contribution: React.FC = () => {
    return (
        <Container id="dein-beitrag" className="section not-full">
            <div className="headline-container">
                <div className="header-marker"></div>
                <h2 className="text-center section-header">Dein Beitrag</h2>
            </div>
            <div className="flex-container">
                <div className={styles.img}></div>
                <div className="grid-half">
                    <p className="paragraph">
                        Aktuell freuen wir uns über Likes auf unseren
                        Social-Media Kanälen und generell die Verbreitung der
                        Message unseres Projekts.<br></br>Bei allgemeinen Fragen
                        und Anmerkungen, oder dem Wunsch einen Beitrag zum
                        Erfolg dieses Projekts leisten zu wollen, kann man uns
                        gerne über unsere <a className="link" href="mailto:github@oedp.de">Mail</a> erreichen.<br></br>Wie bereits
                        beschrieben, sind wir selbstverständlich aber auch auf
                        der Suche nach Sponsoren und Partnern aller Art, die uns
                        helfen unsere Städte ein wenig sauberer zu gestalten.
                        Auch die Anmeldung eines eigenen Müllsammel-Events hilft
                        uns natürlich ungemein! Gerne kannst du über den unteren
                        Button loslegen:
                    </p>
                    <div className={styles.download}>
                        <a
                            className="btn btn-primary"
                            href="/create"
                        >
                            Event anmelden
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    )
}
