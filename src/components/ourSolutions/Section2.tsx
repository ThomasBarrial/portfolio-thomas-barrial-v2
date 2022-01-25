import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ActionType } from "../../context/Actions";
import { AppContext } from "../../context/AppContext";
import { contentClass } from "../../styles/contentClass";
import SlideUp from "../animated/SlideUp";

function Section2(): JSX.Element {
    const { ref, inView } = useInView();
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
                payload: 2,
            });
        }
    }, [isAnim]);
    return (
        <div
            ref={ref}
            className="flex  min-h-container w-screen  flex-col items-center justify-center text-center border-t border-b border-pink bg-pink shadow-container bg-opacity-5 py-10"
        >
            {isAnim && (
                <div
                    className={`${contentClass} font-syncopate font-bold text-3xl leading-relaxed lg:text-5xl lg:leading-normal`}
                >
                    <SlideUp duration={1.2}>Partenaire dans le</SlideUp>
                    <SlideUp duration={1.5}>développement</SlideUp>
                    <SlideUp duration={1.8}>d’expériences digitales</SlideUp>
                    <SlideUp duration={2}>innovantes</SlideUp>
                </div>
            )}
        </div>
    );
}

export default Section2;
