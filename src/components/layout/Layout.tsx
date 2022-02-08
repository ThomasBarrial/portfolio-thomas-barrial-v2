import React from 'react';
import Backtop from './Backtop';
import Footer from './footer/Footer';
import Indicator from './Indicator';
import { useisContactFromStore } from '../store/isContactContext.slice';
import ContactForm from '../contactForm/ContactForm';

interface IProps {
  data: ISection[];
  children: React.ReactNode;
}

function Layout({ data, children }: IProps): JSX.Element {
  const { isContact } = useisContactFromStore();
  return (
    <div>
      {isContact.active && <ContactForm />}
      <Indicator data={data} />
      {children}
      <Footer />
      <Backtop />
    </div>
  );
}

export default Layout;
