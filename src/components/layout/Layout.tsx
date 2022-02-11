import React from "react";
import Backtop from "./Backtop";
import Footer from "./footer/Footer";
import Indicator from "./Indicator";
import { useisContactFromStore } from "../store/isContactContext.slice";
import ContactForm from "../contactForm/ContactForm";

interface IProps {
    data: ISection[];
    children: React.ReactNode;
    partners: IPartner[];
    socialLinks: ISocialLink[];
}

function Layout({
    data,
    children,
    partners,
    socialLinks,
}: IProps): JSX.Element {
    const { isContact } = useisContactFromStore();
    return (
        <div>
            {isContact.active && <ContactForm />}
            <Indicator data={data} />
            {children}
            <Footer partners={partners} socialLinks={socialLinks} />
            <Backtop />
        </div>
    );
}

export default Layout;
