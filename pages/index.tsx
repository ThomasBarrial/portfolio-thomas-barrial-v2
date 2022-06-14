import React, { useEffect } from "react";
import Layout from "../src/components/layout/Layout";
import Meta from "../src/components/SEO/Meta";
import HeroBanner from "../src/components/homepage/HeroBanner";
import About from "../src/components/homepage/About";
import WildStory from "../src/components/homepage/wildstory/WildStory";
import Stack from "../src/components/homepage/stack/Stack";
import Aeviso from "../src/components/homepage/aeviso/Aeviso";
import Skills from "../src/components/homepage/Skills";
import Footer from "../src/components/layout/footer/Footer";
import DesignsMobile from "../src/components/homepage/designs/DesignsMobile";
import FooterMobile from "../src/components/layout/FooterMobile";
import { sanityClient } from "../sanity";
import heroBannerQuery from "../query/heroBannerQuery";
import aboutMeQuery from "../query/aboutMeQuery";
import projectsQuery from "../query/projectsQuery";
import { useOffsetYFromStore } from "../src/components/store/offsetY.slice";
import designQuery from "../query/designQuery";
import Designs from "../src/components/homepage/designs/Designs";
import skillsQuery from "../query/skillsQuery";
import footerQuery from "../query/footerQuery";

interface IProps {
    heroBanner: IHeroBanner;
    aboutMe: IAboutMe[];
    projects: IProjects[];
    designs: IDesign[];
    skills: ISkill[];
    footer: IFooter;
}

function index({
    heroBanner,
    aboutMe,
    projects,
    designs,
    skills,
    footer,
}: IProps): JSX.Element {
    const { dispatchOffsetY } = useOffsetYFromStore();
    const handleScroll = () => {
        dispatchOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <Layout>
            <Meta pageTitle="" title="" description="" keywords="" />
            <HeroBanner content={heroBanner} />
            <About content={aboutMe} />
            <WildStory content={projects[0]} />
            <Stack content={projects[1]} />
            <Aeviso content={projects[2]} />
            <Designs content={designs} />
            <DesignsMobile content={designs} />
            <Skills content={skills} />
            <Footer content={footer} />
            <FooterMobile content={footer} />
        </Layout>
    );
}

export default index;

export const getServerSideProps = async (): Promise<{ props: IProps }> => {
    const heroBanner = await sanityClient.fetch(heroBannerQuery);
    const aboutMe = await sanityClient.fetch(aboutMeQuery);
    const projects = await sanityClient.fetch(projectsQuery);
    const designs = await sanityClient.fetch(designQuery);
    const skills = await sanityClient.fetch(skillsQuery);
    const footer = await sanityClient.fetch(footerQuery);

    return {
        props: { heroBanner, aboutMe, projects, designs, skills, footer },
    };
};
