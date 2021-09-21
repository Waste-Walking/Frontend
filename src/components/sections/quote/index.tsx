import React, { CSSProperties } from "react"

import styles from "./quote.module.scss"

export const Quote: React.FC = () => {
    return (
        <div className="section full quote">
            <div className={styles.overlay}>
                <div className={styles.quoteContainer}>
                    <p className={styles.quoteText}>
                        "Never doubt that a small group of thoughtful, committed
                        citizens can change the world; indeed, it is the only
                        thing that ever has."
                    </p>
                    <p className={styles.quoteAuthor}>Margaret Mead</p>
                </div>
            </div>
        </div>
    )
}
