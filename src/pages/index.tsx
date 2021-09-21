import React from "react";

import { Header, Hero, About, Partner, Contribution, Quote, Contact, Footer } from "@components";

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Partner />
            <Quote />
            <Contribution />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
