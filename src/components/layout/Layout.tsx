import React, { useState } from "react";
import Backtop from "./Backtop";
import Footer from "./footer/Footer";
import { useisContactFromStore } from "../store/isContactContext.slice";
import ContactForm from "../contactForm/ContactForm";
import Navbar from "./Navbar";
import Burger from "./Burger";
import Sidebar from "./Sidebar";
// import SmoothScrollComponent from "./SmoothScrollComponent";

interface IProps {
    children: React.ReactNode;
    partners: IPartner[];
    socialLinks: ISocialLink[];
}

function Layout({ children, partners, socialLinks }: IProps): JSX.Element {
    const [isActive, setIsActive] = useState(false);
    const { isContact } = useisContactFromStore();
    return (
        <div>
            {isContact.active && <ContactForm />}
            <Navbar socialLinks={socialLinks} />
            <Burger isActive={isActive} setIsActive={setIsActive} />
            <Sidebar
                socialLinks={socialLinks}
                isActive={isActive}
                setIsActive={setIsActive}
            />
            {/* <SmoothScrollComponent>
                <> */}
            {children}
            <Footer partners={partners} socialLinks={socialLinks} />
            {/* </>
            </SmoothScrollComponent> */}
            <Backtop />
        </div>
    );
}

export default Layout;
