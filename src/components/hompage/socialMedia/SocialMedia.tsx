import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";
import TitleSection from "../../TitleSection";
import SocialIcon from "./components/SocialIcon";

interface IProps {
    socialLinks: ISocialLink[];
    socialLinksText: ISocialLinkText;
}

function SocialMedia({ socialLinks, socialLinksText }: IProps): JSX.Element {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const [isAnim, setIsAnim] = useState(true);
    useEffect(() => {
        if (inView === false && window.innerWidth < 1200) {
            setIsAnim(true);
        } else {
            setIsAnim(inView);
        }
    });

    return (
        <SectionContainer id="Links" BG="bot">
            <div className="absolute">
                <Image src="/bg1.png" height={400} width={400} />
            </div>
            <div ref={ref} className={contentClass}>
                {isAnim && (
                    <div className="text-center animate-fadeIn">
                        <TitleSection title={socialLinksText.title} />
                        <div className="flex items-center justify-center my-10">
                            {socialLinks.map((item) => (
                                <div key={item.name}>
                                    <SocialIcon item={item} />
                                </div>
                            ))}
                        </div>
                        <div className="font-poppins text-md md:text-lg mx-4">
                            {socialLinksText.subtitle}
                        </div>
                    </div>
                )}
            </div>
        </SectionContainer>
    );
}

export default SocialMedia;
