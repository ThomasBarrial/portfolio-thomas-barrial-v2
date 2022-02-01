import bg from '../../../public/bgspendcoin.png';
import bg2 from '../../../public/bg2.png';
import bg3 from '../../../public/bg3.png';
import RoadMap from '../../components/hompage/roadMap/RoadMap';
import Landing from '../../components/hompage/landing/Landing';
import OurTeam from '../../components/hompage/ourTeam/OurTeam';

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
    Component: (): JSX.Element => <OurTeam />,
  },
];
