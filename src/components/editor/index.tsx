import React, { useEffect, useState, useRef } from "react"
import { useQuill } from "react-quilljs"
import styles from "./editor.module.scss"

import { updateContent } from "@redux/actions"
import { useAppDispatch } from "@redux/store"

export const Editor: React.FC = (props) => {
    const dispatch = useAppDispatch()
    const counterRef = useRef(null)
    const theme = "bubble"

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ align: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
        ],
        magicUrl: true,
        counter: true,
    }

    const placeholder = "Eventbeschreibung"

    const { quill, quillRef, Quill } = useQuill({
        modules,
        theme,
        placeholder,
    })
    if (Quill && !quill) {
        // For execute this line only once.
        const MagicUrl = require("quill-magic-url").default // Install with 'yarn add quill-magic-url'
        Quill.register("modules/magicUrl", MagicUrl)
        Quill.register("modules/counter", function (quill, options) {
            quill.on("text-change", function () {
                const text = quill.getText()
                dispatch(updateContent(quill.root.innerHTML))
                counterRef.current.innerText = text.length - 1 + " / 2000"
                if (text.length > 2000) {
                    quill.deleteText(2000, quill.getLength())
                }
            })
        })
    }

    return (
        <div>
            <div className={styles.editor}>
                <div ref={quillRef} />
            </div>
            <div className={styles.counter} ref={counterRef} >0 / 2000</div>
            <p className={styles.formatText}>Zum Formatieren Text selektieren</p>
        </div>
    )
}
