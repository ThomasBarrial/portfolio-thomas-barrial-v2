import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import contentClass from "../../../styles/contentClass";
import logo from "../../../../public/logotransparent.png";
import IsLoaderContext from "../../../context/isLoaderContext";
import SlideUp from "../../animated/SlideUp";
import { AppContext } from "../../../context/AppContext";
import { ActionType } from "../../../context/Actions";
import SectionContainer from "../../SectionContainer";
import bg from "../../../../public/bgspendcoin.png";

function Landing({ landingData }: { landingData: ILanding }): JSX.Element {
    const { isLoader } = useContext(IsLoaderContext);
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
                payload: 1,
            });
        }
    }, [isAnim]);

    return (
        <SectionContainer id="Home" BG={bg}>
            <div
                ref={ref}
                className={`${contentClass} font-poppins text-center`}
            >
                {!isLoader && isAnim && (
                    <div className="flex flex-col items-center justify-center">
                        <SlideUp
                            duration={1.2}
                            className="font-syncopate font-bold text-7xl text-center"
                        >
                            {landingData.websiteTitle}
                        </SlideUp>
                        <SlideUp
                            duration={1.5}
                            className="text-2xl font-poppins mt-2 text-center"
                        >
                            {landingData.subtitle}
                        </SlideUp>
                        <SlideUp
                            duration={2.5}
                            className="mt-10 flex w-full justify-center"
                        >
                            <a
                                href={landingData.linkMetashop}
                                className="bg-transparent z-40 transform   duration-500 hover:border-blue hover:text-blue lg:mx-4 mx-2  text-xs lg:text-base rounded-md border px-10 py-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {landingData.buttonMetaShop}
                            </a>
                            <a
                                href={landingData.linkWhitepaper}
                                className="bg-transparent z-40 transform   duration-500 hover:border-blue hover:text-blue lg:mx-4 mx-2  text-xs lg:text-base rounded-md border px-10 py-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {landingData.buttonWhitePaper}
                            </a>
                        </SlideUp>
                        <SlideUp
                            duration={2}
                            className="text-center  font-thin leading-7 mt-10 lg:mx-20 font-poppins lg:text-lg"
                        >
                            {landingData.websiteDescription}
                        </SlideUp>
                    </div>
                )}
                {!isLoader && isAnim && (
                    <div className="absolute mr-20">
                        <Image
                            className="animate-fadeIn"
                            src={logo}
                            alt="Picture of the author"
                            width={250}
                            height={700}
                        />
                    </div>
                )}
            </div>
        </SectionContainer>
    );
}

export default Landing;
