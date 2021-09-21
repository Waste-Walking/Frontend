import React, { useEffect, useState, useRef } from "react"
import { Form, Container, Row } from "react-bootstrap"
import styles from "./captcha.module.scss"
import { faSync } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Captcha: React.FC<{
    callback?: Function
}> = ({ callback }) => {
    const [captcha_value, setCaptcha_value] = useState("")

    useEffect(() => {
        loadCaptcha()
    }, [])

    const loadCaptcha = () => {
        let length = 6

        var charset =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = ""
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n))
        }

        let captcha = retVal

        setCaptcha_value(captcha)

        let canvas = document.getElementById("canv") as HTMLCanvasElement,
            ctx = canvas.getContext("2d")
        var radius = 5
        let text = captcha
        let lines = text.split("\n")
        var x = 1
        var y = 5
        var w = length * 25
        var h = lines.length * 30
        var r = x + w
        var b = y + h

        ctx.canvas.width = length * 26
        ctx.canvas.height = lines.length * 38

        ctx.beginPath()
        ctx.moveTo(x + radius, y)
        ctx.lineTo(r - radius, y)
        ctx.quadraticCurveTo(r, y, r, y + radius)
        ctx.lineTo(r, y + h - radius)
        ctx.quadraticCurveTo(r, b, r - radius, b)
        ctx.lineTo(x + radius, b)
        ctx.quadraticCurveTo(x, b, x, b - radius)
        ctx.lineTo(x, y + radius)
        ctx.quadraticCurveTo(x, y, x + radius, y)
        ctx.fillStyle = "#4F774E"
        ctx.fill()

        ctx.textBaseline = "hanging"
        ctx.font = "italic 20px Arial"
        ctx.fillStyle = "#FFFFFF"

        let num = 0
        for (let i = 0; i < length; i++) {
            num = num + 1
            let height_num = 20 * num
            ctx.fillText(
                retVal[i],
                height_num,
                Math.round(Math.random() * (15 - 12) + 12),
            )
        }
    }

    const validate = (input: string) => {
        if (input != captcha_value) {
            callback(false)
        } else {
            callback(true)
        }
    }

    return (
        <Container style={{ margin: 0 }}>
            <Row>
                <canvas id="canv" className={styles.canvas}></canvas>
                <div onClick={loadCaptcha}>
                    <FontAwesomeIcon
                        className={styles.reload_href}
                        icon={faSync}
                    />
                </div>
            </Row>
            <Row>
                <Form.Control
                    className={styles.input}
                    onChange={(event) => {
                        validate(event.target.value)
                    }}
                    type="text"
                    placeholder="Code"
                />
            </Row>
        </Container>
    )
}
