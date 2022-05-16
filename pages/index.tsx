/* eslint-disable react/function-component-definition */
import {
    getDocs,
    collection,
    DocumentData,
    QuerySnapshot,
} from "firebase/firestore";
import { GetStaticProps, NextPage } from "next";
import Layout from "../src/components/layout/Layout";
import Meta from "../src/components/SEO/Meta";
import db from "../firebase/getClient";
import Landing from "../src/components/hompage/landing/Landing";
import Solution from "../src/components/hompage/solution/Solution";
import OurTeam from "../src/components/hompage/ourTeam/OurTeam";
import SocialMedia from "../src/components/hompage/socialMedia/SocialMedia";
import Product from "../src/components/hompage/product/Product";
import RoadMap from "../src/components/hompage/roadmap/RoadMap";

interface IProps {
    partners: IPartner[];
    socialLinks: ISocialLink[];
    solution: ISolution;
    product: IProduct;
    roadMap: IRoadMap[];
}

const Home: NextPage<IProps> = ({
    partners,
    socialLinks,
    solution,
    product,
    roadMap,
}: IProps): JSX.Element => (
    <Layout partners={partners} socialLinks={socialLinks}>
        <Meta
            pageTitle="Metashop"
            title="Buy Everything with crypto"
            description="Spend coin team is focus on building customised e-shops called meta-shops. As a seller, you’ll be able to offer decentralized crypto-paiement to your customers and receive euros or crypto-currencies at your will."
            keywords="crypto payment metamask ecommerce decentralized metashop spendcoin woocommerce purchase buy cryptocurrency cryptomonnaie"
        />
        <Landing />
        <Solution data={solution} />
        <Product data={product} />
        <RoadMap data={roadMap} />
        <OurTeam />
        <SocialMedia />
    </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps<IProps> = async () => {
    const partnersRef = collection(db, "partners");
    const resPartners = await getDocs(partnersRef);
    const socialLinksRef = collection(db, "socialLinks");
    const resSocialLinks = await getDocs(socialLinksRef);
    const solutionRef = collection(db, "Solution");
    const resSolution = await getDocs(solutionRef);
    const productRef = collection(db, "product");
    const resProduct = await getDocs(productRef);
    const roadMapRef = collection(db, "roadmap");
    const resRoadMap = await getDocs(roadMapRef);

    const getDocuments = (res: QuerySnapshot<DocumentData>) =>
        res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

    const partners = getDocuments(resPartners);
    const socialLinks = getDocuments(resSocialLinks);
    const solution = getDocuments(resSolution)[0];
    const product = getDocuments(resProduct)[0];
    const roadMap = getDocuments(resRoadMap);

    return {
        props: {
            partners: partners as IPartner[],
            socialLinks: socialLinks as ISocialLink[],
            solution: solution as ISolution,
            product: product as IProduct,
            roadMap: roadMap as IRoadMap[],
        }, // will be passed to the page component as props
        revalidate: 1440,
    };
};
