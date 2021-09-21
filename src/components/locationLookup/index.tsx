import React, { useEffect, useState, useRef } from "react"
import styles from "./locationLookup.module.scss"
import { Form } from "react-bootstrap"

interface Result {
    boundingbox: Array<string>
    display_name: string
    lat: string
    lon: string
}

class debouncedMethod<T> {
    constructor(method: T, debounceTime: number) {
        this._method = method
        this._debounceTime = debounceTime
    }
    private _method: T
    private _timeout: number
    private _debounceTime: number
    public invoke: T = ((...args: any[]) => {
        this._timeout && window.clearTimeout(this._timeout)
        this._timeout = window.setTimeout(() => {
            ;(this._method as any)(...args)
        }, this._debounceTime)
    }) as any
}

export const LocationLookup: React.FC<{
    placeholder?: string
    callback?: Function
    city?: string
}> = ({ placeholder = "Ort", callback, city = "Berlin" }) => {
    var debounce = 1000
    var countrycodes = "de"
    var acceptLanguage = "de"

    const [results, setResults] = useState<Partial<Result[]>>([])
    const [showResults, setShowResults] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    const mainContainerRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        document.addEventListener("click", function (event) {
            var isClickInside = mainContainerRef?.current?.contains(
                event.target as Node,
            )
            if (!isClickInside) {
                setShowResults(false)
            }
        })

        document.onkeyup = function (event) {
            if (event.key === "Escape") {
                setShowResults(false)
            }
        }
    })

    const renderResults = (
        results: any,
        callback: Function | undefined,
        setShowResults: React.Dispatch<React.SetStateAction<boolean>>,
    ) => (
        <div className={styles.results}>
            {results.map((result: Result, index: number) => (
                <div
                    key={index}
                    className={styles.result}
                    onClick={() => {
                        if (callback) {
                            callback(result)
                            setShowResults(false)
                            mainContainerRef.current.value =
                                result?.display_name
                        }
                    }}
                >
                    {result?.display_name}
                </div>
            ))}
        </div>
    )

    function getGeocoding(address = "") {
        if (address.length === 0) return

        setShowLoader(true)

        let url = `https://nominatim.openstreetmap.org/search?format=json&q=${address}&city=${city}&countrycodes=${countrycodes}&accept-language=${acceptLanguage}&featuretype=city`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setResults(data)
                setShowResults(true)
            })
            .catch((err) => console.warn(err))
            .finally(() => setShowLoader(false))
    }

    var debouncer = new debouncedMethod((address: string) => {
        getGeocoding(address)
    }, debounce)

    return (
        <div>
            <div className={styles.reactOsmGeocoding}>
                <Form.Group>
                    <Form.Label>Ort des Events</Form.Label>
                    <Form.Control
                        ref={mainContainerRef}
                        id="locationInput"
                        type="text"
                        placeholder={placeholder}
                        onClick={() => setShowResults(true)}
                        onChange={(event) =>
                            debouncer.invoke(event.target.value)
                        }
                    />
                </Form.Group>
                {showLoader && <div className={styles.loader}></div>}
                {results.length && showResults
                    ? renderResults(results, callback, setShowResults)
                    : ""}
            </div>
        </div>
    )
}
