import bg from '../../../public/bgspendcoin.png';
import bg2 from '../../../public/bg2.png';
import bg3 from '../../../public/bg3.png';
import bg4 from '../../../public/bg4.png';
import bg5 from '../../../public/bg5.png';
import RoadMap from '../../components/hompage/roadMap/RoadMap';
import Landing from '../../components/hompage/landing/Landing';
import OurTeam from '../../components/hompage/ourTeam/OurTeam';
import SocialMedia from '../../components/hompage/socialMedia/SocialMedia';
import Partners from '../../components/hompage/partners/Partners';
import Description from '../../components/hompage/description/Description';

export const homeSections = [
  {
    id: 'section1',
    bg: bg as string,
    Component: (): JSX.Element => <Landing />,
  },
  {
    id: 'section2',
    bg: bg2 as string,
    Component: (): JSX.Element => <RoadMap />,
  },
  {
    id: 'section3',
    bg: bg3 as string,
    Component: (): JSX.Element => <Description />,
  },
  {
    id: 'section4',
    bg: bg4 as string,
    Component: (): JSX.Element => <Partners />,
  },

  {
    id: 'section5',
    bg: bg5 as string,
    Component: (): JSX.Element => <OurTeam />,
  },
  {
    id: 'section6',
    bg: bg2 as string,
    Component: (): JSX.Element => <SocialMedia />,
  },
];
