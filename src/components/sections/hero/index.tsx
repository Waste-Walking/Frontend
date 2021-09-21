import React, { CSSProperties } from "react"
import { Container } from "react-bootstrap"
import { Button } from "@components"

import styles from "./hero.module.scss"

export const Hero: React.FC = () => {
    return (
        <Container className={styles.hero}>
            <div className={styles.heroContent}>
                <h2 className={styles.heroHeader}>
                    Für saubere Städte und eine bessere Zukunft
                </h2>
                <Button className="heroButton" href="#ueber-uns">Mehr erfahren</Button>
            </div>
        </Container>
    )
}
