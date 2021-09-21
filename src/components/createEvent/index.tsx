import styles from "./createEvent.module.scss"
import React, { useEffect, useState, useRef } from "react"
import { Form, Alert } from "react-bootstrap"
import { LocationLookup, Captcha, Button, Editor } from "@components"
import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css"
import moment from "moment"
import "moment/locale/de"
import { useRouter } from "next/router"

import { useSelector } from "react-redux"

import {
    updateTitle,
    updateLocation,
    updateLon,
    updateLat,
    updateDate,
    updateEmail,
} from "@redux/actions"
import { RootState } from "@redux/reducers"
import { useAppDispatch } from "@redux/store"

import { useMutation } from "@apollo/client"
import { CREATE_EVENT } from "@graphql/Mutations"

export const CreateEvent: React.FC = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const title = useSelector((state: RootState) => state.createEvent.title)
    const content = useSelector((state: RootState) => state.createEvent.content)
    const location = useSelector(
        (state: RootState) => state.createEvent.location,
    )
    const lat = useSelector((state: RootState) => state.createEvent.lat)
    const lon = useSelector((state: RootState) => state.createEvent.lon)
    const date = useSelector((state: RootState) => state.createEvent.date)
    const email = useSelector((state: RootState) => state.createEvent.email)

    const [captcha, setCaptcha] = useState(false)
    const [checklistCheckbox, setChecklistCheckbox] = useState("")

    var [titleWarning, setTitleWarning] = useState(false)
    var [descriptionWarning, setDescriptionWarning] = useState(false)
    var [locationWarning, setLocationWarning] = useState(false)
    var [dateWarning, setDateWarning] = useState(false)
    var [mailWarning, setMailWarning] = useState(false)
    var [captchaWarning, setCaptchaWarning] = useState(false)
    var [checklistWarning, setChecklistWarning] = useState(false)

    var today = moment()
    var valid = function (current) {
        return current.isAfter(today)
    }

    const [createEvent, { error }] = useMutation(CREATE_EVENT)

    const handleSubmit = () => {
        setTitleWarning(false)
        setDescriptionWarning(false)
        setLocationWarning(false)
        setDateWarning(false)
        setMailWarning(false)
        setCaptchaWarning(false)
        setChecklistWarning(false)
        if (title.length <= 0) {
            setTitleWarning(true)
        } else if (content.length <= 0) {
            setDescriptionWarning(true)
        } else if (location.length <= 0) {
            setLocationWarning(true)
        } else if (date.length <= 0) {
            setDateWarning(true)
            //} else if (email.length <= 0) {
            //    setMailWarning(true)
        } else if (!captcha) {
            setCaptchaWarning(true)
        } else if (checklistCheckbox.length <= 0) {
            setChecklistWarning(true)
        } else {
            createEvent({
                variables: {
                    title: title,
                    content: content,
                    location: location,
                    lon: parseFloat(lon),
                    lat: parseFloat(lat),
                    date: date,
                    // email: email,
                },
            })
            if (error) {
                console.log(error)
            } else {
                router.push("/events")
            }
        }
    }

    return (
        <Form className={styles.centerDiv}>
            <Form.Group>
                <h1 className="text-center mt-4">Event erstellen</h1>
            </Form.Group>
            <Form.Group>
                <div className="callout callout-primary">
                    <h4>Erstellen Sie hier ihre eigene Müllsammelaktion.</h4>
                    Mit Hilfe der{" "}
                    <a className="link" href="/checklist" target="_blank">
                        Checkliste
                    </a>{" "}
                    überprüfen Sie, ob alles richtig geplant wurde.
                </div>
            </Form.Group>
            <Form.Group>
                {titleWarning ? (
                    <Alert variant="warning">
                        <p>Der Titel darf nicht leer sein.</p>
                    </Alert>
                ) : null}
                {descriptionWarning ? (
                    <Alert variant="warning">
                        <p>Die Beschreibung darf nicht leer sein.</p>
                    </Alert>
                ) : null}
                {locationWarning ? (
                    <Alert variant="warning">
                        <p>Der Ort darf nicht leer sein. Bitte einen richtigen Ort aus der Liste auswählen.</p>
                    </Alert>
                ) : null}
                {dateWarning ? (
                    <Alert variant="warning">
                        <p>Das Datum darf nicht leer sein.</p>
                    </Alert>
                ) : null}
                {mailWarning ? (
                    <Alert variant="warning">
                        <p>Die E-Mail darf nicht leer sein.</p>
                    </Alert>
                ) : null}
                {checklistWarning ? (
                    <Alert variant="warning">
                        <p>Bitte die Checkliste als erstes lesen.</p>
                    </Alert>
                ) : null}
            </Form.Group>
            <Form.Group>
                <Form.Label>Titel des Events</Form.Label>
                <Form.Control
                    onChange={(e) => dispatch(updateTitle(e.target.value))}
                    type="text"
                    size="lg"
                    placeholder="Titel des Events"
                />
            </Form.Group>
            <Form.Group>
                <LocationLookup
                    callback={(data) => {
                        dispatch(updateLocation(data.display_name))
                        dispatch(updateLon(data.lon))
                        dispatch(updateLat(data.lat))
                    }}
                ></LocationLookup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Datum und Uhrzeit</Form.Label>
                <Datetime
                    onChange={(e) => dispatch(updateDate(e.toString()))}
                    locale="de"
                    strictParsing={true}
                    isValidDate={valid}
                />
            </Form.Group>
            <Form.Group>
                <Editor></Editor>
            </Form.Group>
            {/*
            <Form.Group>
                <Form.Label>E-Mail Adresse</Form.Label>
                <Form.Control
                    onChange={(e) => dispatch(updateEmail(e.target.value))}
                    type="email"
                    placeholder="E-Mail"
                />
                <Form.Text className="text-muted">
                    Die E-Mail wird nicht veröffentlicht.
                </Form.Text>
            </Form.Group>
            */}
            <Form.Group>
                {captchaWarning ? (
                    <Alert variant="warning">
                        <p>Der Captcha ist inkorrekt.</p>
                    </Alert>
                ) : null}
                <Captcha
                    callback={(data) => {
                        setCaptcha(data)
                    }}
                ></Captcha>
            </Form.Group>
            <Form.Group>
                <div className={styles.checkbox}>
                    <Form.Check
                        onChange={(e) => setChecklistCheckbox(e.target.value)}
                        className={styles.consent_checkBox}
                        type="checkbox"
                    />
                </div>
                <div className={styles.checkbox_label}>
                    Ich habe die{" "}
                    <a className="link" href="/checklist" target="_blank">
                        Checkliste
                    </a>{" "}
                    gelesen und das Event richtig vorbereitet.
                </div>
            </Form.Group>
            <Form.Group>
                <Button
                    type="button"
                    onClick={handleSubmit}
                    className={styles.submitButton}
                    variant="primary"
                >
                    Event erstellen
                </Button>
            </Form.Group>
        </Form>
    )
}
