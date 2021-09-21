import React from "react"
import dynamic from "next/dynamic"
import Head from "next/head"

import { Header, CreateEvent, Cards } from "@components"
const Footer = dynamic(() =>
    import("@components/footer").then((mod) => mod.Footer),
)

const App: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Event erstellen / Waste Walking</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <CreateEvent />
                <Footer />
            </div>
        </div>
    )
}

export default App
