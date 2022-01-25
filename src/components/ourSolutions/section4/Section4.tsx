import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ActionType } from "../../../context/Actions";
import { AppContext } from "../../../context/AppContext";
import { contentClass } from "../../../styles/contentClass";
import data from "../../../data/ourSolutions/section4";
import Image from "next/dist/client/image";
import SlideDown from "../../animated/SlideDown";
import TechIcon from "./components/TechIcon";
import Text from "./components/Text";

function Section4(): JSX.Element {
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
                payload: 4,
            });
        }
    }, [isAnim]);
    return (
        <div
            ref={ref}
            className="flex  min-h-container w-screen  flex-col items-center justify-center text-center border-t border-b border-pink bg-pink shadow-container bg-opacity-5 py-10"
        >
            {isAnim && (
                <div className={`${contentClass}`}>
                    <SlideDown duration={3} className="absolute">
                        <Image
                            src="/logoReact.png"
                            alt=""
                            height={500}
                            width={500}
                        />
                    </SlideDown>
                    <SlideDown
                        duration={1.8}
                        className="font-syncopate font-bold text-3xl"
                    >
                        {data.title1}
                    </SlideDown>
                    <SlideDown duration={2} className="my-2 lg:mt-5 font-bold">
                        {data.subTitle}
                    </SlideDown>
                    <div className="flex my-5">
                        {data.techIcons.map((item, index) => {
                            return <TechIcon item={item} key={index} />;
                        })}
                    </div>
                    {data.text.map((item) => {
                        return (
                            <div key={item.text}>
                                <Text item={item} />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Section4;
