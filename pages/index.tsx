import React, { useEffect, useState } from "react";
import Layout from "../src/components/layout/Layout";
import Meta from "../src/components/SEO/Meta";
import HeroBanner from "../src/components/homepage/HeroBanner";
import About from "../src/components/homepage/About";
import WildStory from "../src/components/homepage/wildstory/WildStory";
import Stack from "../src/components/homepage/stack/Stack";
import Aeviso from "../src/components/homepage/aeviso/Aeviso";

import Skills from "../src/components/homepage/Skills";
import Footer from "../src/components/layout/Footer";
import DesignsMobile from "../src/components/homepage/designs/DesignsMobile";
import FooterMobile from "../src/components/layout/FooterMobile";
import { sanityClient } from "../sanity";
import heroBannerQuery from "../query/heroBannerQuery";
import aboutMeQuery from "../query/aboutMeQuery";
import projectsQuery from "../query/projectsQuery";
import { useOffsetYFromStore } from "../src/components/store/offsetY.slice";
import designQuery from "../query/designQuery";
import Designs from "../src/components/homepage/designs/Designs";

interface IProps {
    heroBanner: [IHeroBanner];
    aboutMe: [IAboutMe];
    projects: IProjects[];
    designs: IDesign[];
}

function index({
    heroBanner,
    aboutMe,
    projects,
    designs,
}: IProps): JSX.Element {
    const [offsetY, setOffsetY] = useState(0);
    const { dispatchOffsetY } = useOffsetYFromStore();
    const handleScroll = () => {
        setOffsetY(window.scrollY);
        dispatchOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <Layout>
            <Meta pageTitle="" title="" description="" keywords="" />
            <HeroBanner content={heroBanner[0]} />
            <About content={aboutMe} />
            <WildStory content={projects[0]} />

            <Stack content={projects[1]} />
            <Aeviso content={projects[2]} />
            <Designs content={designs} />
            <DesignsMobile content={designs} />

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
    const heroBanner = await sanityClient.fetch(heroBannerQuery);
    const aboutMe = await sanityClient.fetch(aboutMeQuery);
    const projects = await sanityClient.fetch(projectsQuery);
    const designs = await sanityClient.fetch(designQuery);

    return {
        props: { heroBanner, aboutMe, projects, designs },
    };
};
