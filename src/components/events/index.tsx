import React from "react"
import styles from "./events.module.scss"
import moment from "moment"
import { useQuery } from "@apollo/client"
import { GET_EVENTS } from "@graphql/Queries"
import {
    faMapMarkerAlt,
    faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Row, Spinner } from "react-bootstrap"
import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
} from "next-share"

export const Events: React.FC = () => {
    const { error, loading, data } = useQuery(GET_EVENTS)

    if (loading)
        return (
            <div className={styles.centerDiv}>
                <div className={styles.SpinnerDiv}>
                    <div className={styles.Card}>
                        <Spinner
                            className={styles.Spinner}
                            variant="primary"
                            animation="border"
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        <p className="text-center mt-2">Events werden geladen...</p>
                    </div>
                </div>
            </div>
        )
    if (error)
        return (
            <div className={styles.ErrorDiv}>
                <div className={styles.Card}>
                    <p className="text-center font-weight-bold">
                        Es konnte keine Verbindung zum Eventserver hergestellt
                        werden.
                    </p>
                    {/* <p>ERROR: {error.message}</p> */}
                </div>
            </div>
        )

    return (
        <div className={styles.centerDiv}>
            <h1 className="text-center mt-4">Events</h1>

            {data.event.list.length == 0 && (
                <div className={styles.Card}>
                    <p className="text-center font-weight-bold">
                        Keine aktuellen Events
                    </p>
                </div>
            )}

            {data.event.list.map((val, i) => {
                return (
                    <div className={styles.Card} key={val.id}>
                        <div>
                            <Row>
                                <h2 className={styles.title}>{val.title}</h2>
                            </Row>
                            <Row>
                                <FontAwesomeIcon
                                    className={styles.locationIcon}
                                    icon={faMapMarkerAlt}
                                />

                                <p className={styles.location}>
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${val.lat},${val.lon}`}
                                        target="_blank"
                                    >
                                        {val.location.split(",")[0]}
                                    </a>
                                </p>

                                <FontAwesomeIcon
                                    className={styles.dateIcon}
                                    icon={faCalendarAlt}
                                />

                                <p className={styles.date}>
                                    {moment(new Date(val.date)).format(
                                        "dddd, Do MMMM YYYY - H:mm [Uhr]",
                                    )}
                                </p>
                            </Row>

                            <div
                                className="styles.content"
                                dangerouslySetInnerHTML={{
                                    __html: val.content,
                                }}
                            />
                        </div>
                        <WhatsappShareButton
                            url={"https://waste-walking.de/events"}
                            title={`Sei dabei! Hilf mit! Bei der nächsten WasteWalking Aktion in ${
                                val.location.split(",")[0]
                            }.`}
                            separator=" - "
                        >
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        &ensp;
                        <TwitterShareButton
                            url={"https://waste-walking.de/events"}
                            title={`Sei dabei! Hilf mit! Bei der nächsten WasteWalking Aktion in ${
                                val.location.split(",")[0]
                            }.`}
                            hashtags={["wastewalking"]}
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        &ensp;
                        <FacebookShareButton
                            url={"https://waste-walking.de/events"}
                            quote={`Sei dabei! Hilf mit! Bei der nächsten WasteWalking Aktion in ${
                                val.location.split(",")[0]
                            }.`}
                            hashtag={"wastewalking"}
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        &ensp;
                        <TelegramShareButton
                            url={"https://waste-walking.de/events"}
                            title={`Sei dabei! Hilf mit! Bei der nächsten WasteWalking Aktion in ${
                                val.location.split(",")[0]
                            }.`}
                        >
                            <TelegramIcon size={32} round />
                        </TelegramShareButton>
                        &ensp;
                        <EmailShareButton
                            url={"https://waste-walking.de/events"}
                            subject={"WasteWalking Aktion"}
                            body={`Sei dabei! Hilf mit! Bei der nächsten WasteWalking Aktion in ${
                                val.location.split(",")[0]
                            }.`}
                        >
                            <EmailIcon size={32} round />
                        </EmailShareButton>
                    </div>
                )
            })}
        </div>
    )
}
