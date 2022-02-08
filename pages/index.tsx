import { getDocs, collection } from 'firebase/firestore';
import { homeSections } from '../src/data/homepage/HomeSections';
import Layout from '../src/components/layout/Layout';
import Meta from '../src/components/SEO/Meta';
// import Meta from '../src/components/SEO/Meta';
import db from '../firebase/getClient';
import Landing from '../src/components/hompage/landing/Landing';
import RoadMap from '../src/components/hompage/roadMap/RoadMap';
import Description from '../src/components/hompage/description/Description';
import Partners from '../src/components/hompage/partners/Partners';
import OurTeam from '../src/components/hompage/ourTeam/OurTeam';
import SocialMedia from '../src/components/hompage/socialMedia/SocialMedia';

interface IProps {
  ourTeamText: OurTeamText;
}

function Home({ ourTeamText }: IProps): JSX.Element {
  return (
    <Layout data={homeSections}>
      <Meta
        pageTitle="SpendCoin"
        title="Buy Everything with crypto"
        description="Spend coin team is focus on building customised e-shops called meta-shops. As a seller, you’ll be able to offer decentralized crypto-paiement to your customers and receive euros or crypto-currencies at your will."
        keywords=""
      />
      <Landing />
      <RoadMap />
      <Description />
      <Partners />
      <OurTeam ourTeamText={ourTeamText} />
      <SocialMedia />
    </Layout>
  );
}

export default Home;

export async function getStaticProps(): Promise<{
  props: {
    ourTeamText: {
      id: string;
    };
  };
  revalidate: number;
}> {
  const ourteamTextCollectionRef = collection(db, 'ourteam');
  const resOurTeamText = await getDocs(ourteamTextCollectionRef);

  const res = resOurTeamText.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  const ourTeamText = res[0];

  return {
    props: { ourTeamText }, // will be passed to the page component as props
    revalidate: 120,
  };
}
