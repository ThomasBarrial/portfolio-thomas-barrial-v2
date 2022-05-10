import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useisContactFromStore } from "../../store/isContactContext.slice";
import SlideUp from "../../animated/SlideUp";
import Button from "../../buttons/Button";
import SlideDown from "../../animated/SlideDown";
import SocialMedia from "./SocialMedia";
import Partners from "./Partners";

interface IProps {
    partners: IPartner[];
    socialLinks: ISocialLink[];
}

function Footer({ partners, socialLinks }: IProps): JSX.Element {
    const { ref, inView } = useInView();
    const [isAnim, setIsAnim] = useState(true);
    const { dispatchIsContact } = useisContactFromStore();

    useEffect(() => {
        if (inView === false && window.innerWidth < 1200) {
            setIsAnim(true);
        } else {
            setIsAnim(inView);
        }
    });

    return (
        <div
            className="flex  min-h-container w-screen  flex-col items-center justify-center text-white border-t border-b border-blue bg-blue shadow-container bg-opacity-5 py-24"
            style={{
                background:
                    "linear-gradient(150.0deg, #174B75 0%, #000101 94.37%)",
            }}
            ref={ref}
        >
            {isAnim && (
                <div className="text-pink flex w-11/12 lg:py-16 flex-row flex-wrap justify-around items-center  lg:w-8/12 max-w-content">
                    <div className="w-6/12 lg:h-32 lg:w-2/12 lg:border-l lg:border-r px-2 lg:px-8">
                        <Partners partners={partners} />
                    </div>
                    <div className="w-6/12 lg:h-32 lg:w-2/6  lg:border-r lg:px-8">
                        <SocialMedia socialLinks={socialLinks} />
                    </div>
                    <div className="w-full lg:h-32 mt-5 lg:mt-0 lg:w-3/6  lg:border-r lg:px-8 border-pink">
                        <SlideUp duration={1.5}>
                            <h4 className="font-bold text-sm">
                                Do you have an interesting project to share or
                                any questions ?
                            </h4>
                            <Button
                                onClick={() => dispatchIsContact()}
                                className="mt-5 w-full lg:w-6/12 flex items-center justify-center"
                            >
                                Nous contacter
                            </Button>
                        </SlideUp>
                    </div>
                </div>
            )}
            {isAnim && (
                <div className="flex px-4 lg:px-0 justify-between pt-2 text-xs mt-10 border-t border-pink w-11/12 lg:w-8/12 max-w-content">
                    <SlideDown duration={2}>
                        Develop and design by @thomasbarrial
                    </SlideDown>
                    <SlideDown duration={2} className="text-right">
                        <a
                            href="https://www.digitalcopilote.io/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Digital Copilote 2022
                        </a>
                    </SlideDown>
                </div>
            )}
        </div>
    );
}

export default Footer;
