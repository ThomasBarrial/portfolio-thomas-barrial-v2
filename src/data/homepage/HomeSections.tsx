import Section1 from '../../components/hompage/section1/Section1';
import bg from '../../../public/bgspendcoin.png';

export const homeSections = [
  {
    id: 'section1',
    bg: bg,
    Component: (): JSX.Element => <Section1 />,
  },
];
