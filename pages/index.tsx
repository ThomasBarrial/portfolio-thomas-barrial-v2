import { homeSections } from '../src/data/homepage/HomeSections';
import SectionContainer from '../src/components/SectionContainer';
import Layout from '../src/components/layout/Layout';
import Meta from '../src/components/SEO/Meta';
// import Meta from '../src/components/SEO/Meta';

function Home(): JSX.Element {
  return (
    <Layout data={homeSections}>
      <Meta
        pageTitle="SpendCoin"
        title={'Buy Everything with crypto'}
        description="Spend coin team is focus on building customised e-shops called meta-shops. As a seller, you’ll be able to offer decentralized crypto-paiement to your customers and receive euros or crypto-currencies at your will."
        keywords=""
      />
      {homeSections.map((item) => {
        return (
          <SectionContainer key={item.id} id={item.id} BG={item.bg}>
            {item.Component()}
          </SectionContainer>
        );
      })}
    </Layout>
  );
}

export default Home;
