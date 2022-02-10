import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ActionType } from "../../../context/Actions";
import { AppContext } from "../../../context/AppContext";
import contentClass from "../../../styles/contentClass";
import SlideLeft from "../../animated/SlideLeft";
import SlideUp from "../../animated/SlideUp";
import SectionContainer from "../../SectionContainer";
import bg2 from "../../../../public/bg2.png";

function RoadMap({ roadMap }: { roadMap: IRoadMap[] }): JSX.Element {
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
                payload: 2,
            });
        }
    }, [isAnim]);

    return (
        <SectionContainer id="Roadmap" BG={bg2}>
            <div ref={ref} className={contentClass}>
                {isAnim && (
                    <div className="text-center">
                        <SlideUp
                            duration={1.5}
                            className="font-syncopate font-bold text-4xl md:text-5xl"
                        >
                            PRODUCT ROADMAP
                        </SlideUp>
                        <SlideUp
                            className="mt-5 font-poppins md:text-xl"
                            duration={2}
                        >
                            We aim to allow anyone to purchase goods in a
                            decentralized way with a non custodial wallet.
                        </SlideUp>
                        <div
                            id="roadmap"
                            className="sb h-36 mt-10 flex transform pb-1 z-20 md:justify-center translate-y-14 lg:translate-y-11 md:translate-y-14 text-xs lg:text-base w-screen  overflow-x-auto lg:overflow-x-hidden"
                        >
                            {roadMap.map((item, index) => (
                                <SlideLeft
                                    duration={index + 1}
                                    className={`mx-2 md:mx-7 lg:mx-20 w-24 md:w-28 lg:w-36  flex md:w-content flex-col ${
                                        item.status === "DONE" &&
                                        "text-gray-400"
                                    } ${
                                        item.status === "NEXT" && "text-blue"
                                    }   items-center`}
                                    key={item.name}
                                >
                                    <p className="font-bold">{item.name}</p>
                                    <p className="text-xxs md:text-xs lg:text-sm mb-2">
                                        {item.date}
                                    </p>
                                    <div className="w-line border-r border-blue h-12 " />
                                    <div className="bg-blue h-3 w-3 rounded-full" />
                                    <div className="bg-blue filter blur-sm md:blur-md transform -translate-y-4  h-5 w-5 rounded-full" />
                                </SlideLeft>
                            ))}
                        </div>
                        <div className="border-b border-blue  h-1" />
                    </div>
                )}
            </div>
        </SectionContainer>
    );
}

export default RoadMap;
