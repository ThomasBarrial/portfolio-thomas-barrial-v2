import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ActionType } from "../../../context/Actions";
import { AppContext } from "../../../context/AppContext";
import SlideUp from "../../animated/SlideUp";
import SocialIcon from "./components/SocialIcon";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";
import bg2 from "../../../../public/bg2.png";

interface IProps {
    socialLinks: ISocialLink[];
    socialLinksText: ISocialLinkText;
}

function SocialMedia({ socialLinks, socialLinksText }: IProps): JSX.Element {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const [isAnim, setIsAnim] = useState(true);
    const { dispatch } = useContext(AppContext);
    useEffect(() => {
        if (inView === false && window.innerWidth < 1200) {
            setIsAnim(true);
        } else {
            setIsAnim(inView);
        }
    });

    useEffect(() => {
        if (isAnim) {
            dispatch({
                type: ActionType.SetIndex,
                payload: 6,
            });
        }
    }, [isAnim]);
    return (
        <SectionContainer id="Links" BG={bg2}>
            <div ref={ref} className={contentClass}>
                {isAnim && (
                    <div className="text-center">
                        <SlideUp
                            duration={1}
                            className="font-syncopate font-bold text-4xl md:text-5xl"
                        >
                            {socialLinksText.title}
                        </SlideUp>
                        <SlideUp
                            duration={1.5}
                            className="flex items-center justify-center my-10"
                        >
                            {socialLinks.map((item) => (
                                <div key={item.name}>
                                    <SocialIcon item={item} />
                                </div>
                            ))}
                        </SlideUp>
                        <SlideUp
                            duration={2}
                            className="font-poppins text-md md:text-lg mx-4"
                        >
                            {socialLinksText.subtitle}
                        </SlideUp>
                    </div>
                )}
            </div>
        </SectionContainer>
    );
}

export default SocialMedia;
