import bg from '../../../public/bgspendcoin.png';
import bg2 from '../../../public/bg2.png';
import Section1 from '../../components/hompage/section1/Section1';
import Section2 from '../../components/hompage/section2/Section2';

export const homeSections = [
  {
    id: 'section1',
    bg: bg as string,
    Component: (): JSX.Element => <Section1 />,
  },
  {
    id: 'section2',
    bg: bg2 as string,
    Component: (): JSX.Element => <Section2 />,
  },
];
