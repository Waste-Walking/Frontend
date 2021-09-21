import React, { CSSProperties } from "react"
import { Container } from "react-bootstrap"
import { Button } from "@components"

import styles from "./partner.module.scss"

export const Partner: React.FC = () => {
    return (
        <Container id="ueber-uns" className="section not-full">
            <div className="headline-container">
                <div className="header-marker"></div>
                <h2 className="text-center section-header">Mit freundlicher Unterstützung von</h2>
            </div>
            <div className="flex-container">
                <img src="/oedp.png"></img>
            </div>
        </Container>
    )
}
