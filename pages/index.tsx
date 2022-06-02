import React, { useEffect, useRef, useState } from "react";
import { useTransform, useViewportScroll, motion } from "framer-motion";
import Layout from "../src/components/layout/Layout";
import Meta from "../src/components/SEO/Meta";
import HeroBanner from "../src/components/homepage/HeroBanner";
import About from "../src/components/homepage/About";
import WildStory from "../src/components/homepage/WildStory";
import Stack from "../src/components/homepage/Stack";
import Aeviso from "../src/components/homepage/Aeviso";
import Designs from "../src/components/homepage/Designs";

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
        </Layout>
    );
}

export default index;
