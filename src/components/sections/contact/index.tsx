import React, { CSSProperties } from "react"
import { Container } from "react-bootstrap"
import { Button } from "@components"

import styles from "./contact.module.scss"

export const Contact: React.FC = () => {
    return (
        <Container id="kontakt" className="section not-full">
            <div className="headline-container">
                <div className="header-marker"></div>
                <h2 className="text-center section-header">Interessiert?</h2>
            </div>
            <div className="flex-container">
                <p>Dann kontaktiere uns <a className="link" href="mailto:github@oedp.de">hier</a></p>
            </div>
        </Container>
    )
}
