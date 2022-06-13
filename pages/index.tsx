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
import DesignsMobile from "../src/components/homepage/DesignsMobile";
import FooterMobile from "../src/components/layout/FooterMobile";
import { sanityClient } from "../sanity";

interface IProps {
    heroBanner: [IHeroBanner];
}

function index({ heroBanner }: IProps): JSX.Element {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <Layout>
            <Meta pageTitle="" title="" description="" keywords="" />
            <HeroBanner content={heroBanner[0]} />
            <About />
            <WildStory offsetY={offsetY} />
            <Stack offsetY={offsetY} />
            <Aeviso offsetY={offsetY} />
            <div className="hidden lg:flex">
                <Designs offsetY={offsetY} />
            </div>
            <div className="flex lg:hidden">
                <DesignsMobile />
            </div>
            <Skills />
            <div className="hidden lg:flex">
                <Footer offsetY={offsetY} />
            </div>
            <div className="flex lg:hidden">
                <FooterMobile />
            </div>
        </Layout>
    );
}

export default index;

export const getServerSideProps = async (): Promise<{ props: IProps }> => {
    const heroBannerQuery = `*[_type == "heroBanner"]{
        _id,
        myName,
        profilTitle,
        availableDate, 
    }`;

    const heroBanner = await sanityClient.fetch(heroBannerQuery);

    return {
        props: { heroBanner },
    };
};
