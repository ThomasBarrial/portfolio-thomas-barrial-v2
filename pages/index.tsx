// import { homeSections } from "../src/data/homepage/HomeSections";
// import SectionContainer from "../src/components/SectionContainer";
// import Layout from "../src/components/layout/Layout";
// import Meta from "../src/components/SEO/Meta";

function Home(): JSX.Element {
    return (
        // <Layout data={homeSections}>
        //     <Meta
        //         pageTitle="Digital Copilote Website"
        //         title={"Agence web & solutions d’innovations"}
        //         description="Fort d’une équipe dynamique et engagée, notre agence développe des solutions adaptés et qui génèrent des résultats pour votre entreprise."
        //         keywords="digitale, agence web, react, développement web, site vitrine, site sur mesure, blockchain, cryptomonnaie, react, typescript"
        //     />
        //     {homeSections.map((item) => {
        //         return (
        //             <SectionContainer key={item.id} id={item.id} BG={item.bg}>
        //                 {item.Component()}
        //             </SectionContainer>
        //         );
        //     })}
        // </Layout>

        <div className="h-screen w-screen flex items-center justify-center text-white">
            HOMEPAGE
        </div>
    );
}

export default Home;
