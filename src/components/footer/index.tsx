import React from "react"
import styles from "./footer.module.scss"

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="flex-container">
                <div className="grid-third">
                    <div className={styles.cont}>
                        <h3 className={styles.footerHeadline}>Rechtliches</h3>
                        <a className={styles.footerLink} href="/imprint">
                            Impressum
                        </a>
                        <a className={styles.footerLink} href="/privacy">
                            Datenschutz
                        </a>
                    </div>
                </div>
                <div className="grid-third">
                    <div className={styles.cont}>
                        <h3 className={styles.footerHeadline}>Social</h3>
                        <a className={styles.footerLink} href="">
                            Facebook
                        </a>
                        <a className={styles.footerLink} href="">
                            Instagram
                        </a>
                    </div>
                </div>
                <div className="grid-third">
                    <div className={styles.cont}>
                        <h3 className={styles.footerHeadline}>Events</h3>
                        <a className={styles.footerLink} href="/events">
                            Übersicht
                        </a>
                        <a className={styles.footerLink} href="/create">
                            Event anmelden
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
