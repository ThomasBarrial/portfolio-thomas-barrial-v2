import React from "react";
import Backtop from "./Backtop";
import Footer from "./footer/Footer";
import { useisContactFromStore } from "../store/isContactContext.slice";
import ContactForm from "../contactForm/ContactForm";

interface IProps {
    children: React.ReactNode;
    partners: IPartner[];
    socialLinks: ISocialLink[];
}

function Layout({ children, partners, socialLinks }: IProps): JSX.Element {
    const { isContact } = useisContactFromStore();
    return (
        <div>
            {isContact.active && <ContactForm />}
            {children}
            <Footer partners={partners} socialLinks={socialLinks} />
            <Backtop />
        </div>
    );
}

export default Layout;
