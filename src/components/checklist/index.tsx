import React from "react"
import styles from "./checklist.module.scss"

export const Checklist: React.FC = () => {
    return (
        <div className={styles.centerDiv}>
            <h1 className="text-center mt-4">Checkliste</h1>
            <p>
                Die Checkliste soll als Unterstützung für eine erfolgreiche
                Eventplanung dienen.
            </p>
            <div className={styles.Card}>
                <ul>
                    <li>Bestätigung der örtlichen Behörde einholen</li>
                    <li>Bauhof informiert</li>
                    <li>Picker und Müllsäcke bereitgestellt</li>
                </ul>
            </div>
            <p className="mt-4">
                Du möchtest diese Checkliste verbessern? Dann kontaktiere uns{" "}
                <a
                    className="link"
                    href="mailto:github@oedb.de"
                >
                    hier
                </a>
            </p>
        </div>
    )
}
