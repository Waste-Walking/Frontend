import React from "react"

import { Button } from "@components"
import styles from "./header.module.scss"

const handleToggle = () => {
    document.getElementById("mobileMenu").classList.toggle("show");
  };


export const Header: React.FC = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.navigation}>
                <a href="/" className={styles.logoContainer}>
                    <img
                        className={styles.marg}
                        src="/ww-logo.png"
                        alt="me"
                        width="48"
                        height="48"
                    />
                </a>
                <div className={styles.navigationSub}>
                    <div className={styles.navlinkContainer}>
                        <a className={styles.navLink} href="/#ueber-uns">
                            Über uns
                        </a>
                    </div>
                    <div className={styles.navlinkContainer}>
                        <a className={styles.navLink} href="/#dein-beitrag">
                            Dein Beitrag
                        </a>
                    </div>
                    <div className={styles.navlinkContainer}>
                        <a className={styles.navLink} href="/#kontakt">
                            Kontakt
                        </a>
                    </div>
                    <div className={styles.navlinkContainer}>
                        <a className={styles.navLink} href="/events">
                            Events
                        </a>
                    </div>
                    <div className={styles.navlinkContainer}>
                        <Button href="/create">Event anmelden</Button>
                    </div>
                </div>
                <div className={styles.hamburger} onClick={handleToggle}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>
            <ul id="mobileMenu" className={styles.mobileMenu}>
                    <li>
                        <a className={styles.navLink} onClick={handleToggle} href="/#ueber-uns">
                            Über uns
                        </a>
                    </li>
                    <li>
                        <a className={styles.navLink} onClick={handleToggle} href="/#dein-beitrag">
                            Dein Beitrag
                        </a>
                    </li>
                    <li>
                        <a className={styles.navLink} onClick={handleToggle} href="/#kontakt">
                            Kontakt
                        </a>
                    </li>
                    <li>
                        <a className={styles.navLink} href="/events">
                            Events
                        </a>
                    </li>
                    <li>
                        <a className={styles.navLink} href="/create">
                            Event anmelden
                        </a>
                    </li>
                </ul>
        </div>
    )
}
