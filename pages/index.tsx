import React, { useEffect, useState } from "react";
import Layout from "../src/components/layout/Layout";
import Meta from "../src/components/SEO/Meta";
import HeroBanner from "../src/components/homepage/HeroBanner";
import About from "../src/components/homepage/About";
import WildStory from "../src/components/homepage/WildStory";
import Stack from "../src/components/homepage/Stack";
import Aeviso from "../src/components/homepage/Aeviso";
import Designs from "../src/components/homepage/Designs";
import Skills from "../src/components/homepage/Skills";
import Footer from "../src/components/layout/Footer";

function index(): JSX.Element {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <Layout>
            <Meta pageTitle="" title="" description="" keywords="" />
            <HeroBanner />
            <About />
            <WildStory offsetY={offsetY} />
            <Stack offsetY={offsetY} />
            <Aeviso offsetY={offsetY} />
            <Designs offsetY={offsetY} />
            <Skills />
            <Footer offsetY={offsetY} />
        </Layout>
    );
}

export default index;
