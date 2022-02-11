import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ActionType } from "../../../context/Actions";
import { AppContext } from "../../../context/AppContext";
import contentClass from "../../../styles/contentClass";
import SlideUp from "../../animated/SlideUp";
import Button from "../../buttons/Button";
import SectionContainer from "../../SectionContainer";
import { useisContactFromStore } from "../../store/isContactContext.slice";
import bg3 from "../../../../public/bg3.png";

function Description({ about }: { about: IAbout }): JSX.Element {
    const { dispatchIsContact } = useisContactFromStore();
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
                payload: 3,
            });
        }
    }, [isAnim]);

    return (
        <SectionContainer id="About" BG={bg3}>
            <div ref={ref} className={contentClass}>
                {isAnim && (
                    <div>
                        <SlideUp
                            duration={1.2}
                            className="text-center font-poppins"
                        >
                            {about.text1}
                        </SlideUp>
                        <SlideUp
                            duration={1.5}
                            className="text-center font-poppins mt-5"
                        >
                            {about.text2}
                        </SlideUp>
                        <SlideUp
                            duration={1.8}
                            className="text-center mt-10 font-syncopate font-bold text-3xl"
                        >
                            {about.title1}
                        </SlideUp>
                        <SlideUp
                            duration={2}
                            className="text-center uppercase mt-2 font-poppins font-bold text-xl"
                        >
                            {about.title2}
                        </SlideUp>
                        <SlideUp
                            className="mt-8 flex flex-col lg:flex-row items-center justify-center"
                            duration={2}
                        >
                            <Button className="mx-10">
                                <a
                                    href={about.manifestoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Read our manifesto
                                </a>
                            </Button>
                            <Button
                                onClick={() => dispatchIsContact()}
                                className="mx-10 mt-5 lg:mt-0"
                            >
                                Contact Us
                            </Button>
                        </SlideUp>
                    </div>
                )}
            </div>
        </SectionContainer>
    );
}

export default Description;
