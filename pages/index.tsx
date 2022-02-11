/* eslint-disable react/function-component-definition */
import {
    getDocs,
    collection,
    DocumentData,
    QuerySnapshot,
} from "firebase/firestore";
import { GetStaticProps, NextPage } from "next";
import homeSections from "../src/data/homepage/HomeSections";
import Layout from "../src/components/layout/Layout";
import Meta from "../src/components/SEO/Meta";
import db from "../firebase/getClient";
import Landing from "../src/components/hompage/landing/Landing";
import RoadMap from "../src/components/hompage/roadMap/RoadMap";
import Description from "../src/components/hompage/description/Description";
import Partners from "../src/components/hompage/partners/Partners";
import OurTeam from "../src/components/hompage/ourTeam/OurTeam";
import SocialMedia from "../src/components/hompage/socialMedia/SocialMedia";

interface IProps {
    ourTeamText: OurTeamText;
    collaborators: ICollaborator[];
    collaboratorsSocialLinks: ICollaboratorSocialLink[];
    landing: ILanding;
    roadMap: IRoadMap[];
    about: IAbout;
    partners: IPartner[];
    partnersText: IPartnerText;
    socialLinks: ISocialLink[];
    socialLinksText: ISocialLinkText;
}

const Home: NextPage<IProps> = ({
    ourTeamText,
    collaborators,
    collaboratorsSocialLinks,
    landing,
    roadMap,
    about,
    partners,
    partnersText,
    socialLinks,
    socialLinksText,
}: IProps): JSX.Element => (
    <Layout partners={partners} socialLinks={socialLinks} data={homeSections}>
        <Meta
            pageTitle="SpendCoin"
            title="Buy Everything with crypto"
            description="Spend coin team is focus on building customised e-shops called meta-shops. As a seller, you’ll be able to offer decentralized crypto-paiement to your customers and receive euros or crypto-currencies at your will."
            keywords="crypto payment metamask ecommerce decentralized metashop spendcoin woocommerce purchase buy cryptocurrency cryptomonnaie"
        />
        <Landing landingData={landing} />
        <RoadMap roadMap={roadMap} />
        <Description about={about} />
        <Partners partners={partners} partnersText={partnersText} />
        <OurTeam
            ourTeamText={ourTeamText}
            collaborators={collaborators}
            collaboratorsSocialLinks={collaboratorsSocialLinks}
        />
        <SocialMedia
            socialLinks={socialLinks}
            socialLinksText={socialLinksText}
        />
    </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps<IProps> = async () => {
    const ourteamTextCollectionRef = collection(db, "ourteamtext");
    const resOurTeamText = await getDocs(ourteamTextCollectionRef);
    const collaboratorsRef = collection(db, " collaborators");
    const resCollaborators = await getDocs(collaboratorsRef);
    const collaboratorsSocialLinksRef = collection(
        db,
        "collaboratorsSocialLinks",
    );
    const resCollaboratorsSocialLinks = await getDocs(
        collaboratorsSocialLinksRef,
    );
    const landingRef = collection(db, "landing");
    const resLanding = await getDocs(landingRef);
    const roadMapRef = collection(db, "roadMap");
    const resroadMap = await getDocs(roadMapRef);
    const aboutRef = collection(db, "about");
    const resAbout = await getDocs(aboutRef);
    const partnersRef = collection(db, "partners");
    const resPartners = await getDocs(partnersRef);
    const partnersTextRef = collection(db, "ourPartnersText");
    const resPartnersText = await getDocs(partnersTextRef);
    const socialLinksRef = collection(db, "socialLinks");
    const resSocialLinks = await getDocs(socialLinksRef);
    const socialLinksTextRef = collection(db, "socialLinksText");
    const resSocialLinksText = await getDocs(socialLinksTextRef);

    const getDocuments = (res: QuerySnapshot<DocumentData>) =>
        res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

    const ourTeamText = getDocuments(resOurTeamText)[0];
    const collaborators = getDocuments(resCollaborators);
    const collaboratorsSocialLinks = getDocuments(resCollaboratorsSocialLinks);
    const landing = getDocuments(resLanding)[0];
    const roadMap = getDocuments(resroadMap);
    const about = getDocuments(resAbout)[0];
    const partners = getDocuments(resPartners);
    const partnersText = getDocuments(resPartnersText)[0];
    const socialLinks = getDocuments(resSocialLinks);
    const socialLinksText = getDocuments(resSocialLinksText)[0];

    return {
        props: {
            ourTeamText: ourTeamText as OurTeamText,
            collaborators: collaborators as ICollaborator[],
            collaboratorsSocialLinks:
                collaboratorsSocialLinks as ICollaboratorSocialLink[],
            landing: landing as ILanding,
            roadMap: roadMap as IRoadMap[],
            about: about as IAbout,
            partners: partners as IPartner[],
            partnersText: partnersText as IPartnerText,
            socialLinks: socialLinks as ISocialLink[],
            socialLinksText: socialLinksText as ISocialLinkText,
        }, // will be passed to the page component as props
        revalidate: 1440,
    };
};
