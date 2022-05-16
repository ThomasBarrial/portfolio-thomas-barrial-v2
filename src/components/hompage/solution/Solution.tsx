import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import contentClass from "../../../styles/contentClass";
import SlideRight from "../../animated/SlideRight";
import Button from "../../buttons/Button";
import SectionContainer from "../../SectionContainer";
import TitleSection from "../../TitleSection";
import Arguments from "./components/Arguments";

function Solution({ data }: { data: ISolution }): JSX.Element {
    const { ref, inView } = useInView({ threshold: 0.2 });
    const [isAnim, setIsAnim] = useState(true);

    useEffect(() => {
        if (inView === false && window.innerWidth < 1200) {
            setIsAnim(true);
        } else {
            setIsAnim(inView);
        }
    });

    return (
        <SectionContainer id="Solution" BG="bot">
            <div ref={ref} className={contentClass}>
                {isAnim && <TitleSection title={data.title} />}
                {isAnim && (
                    <div className="w-full flex mt-10">
                        <div className="w-5/12 hidden lg:flex h-96 bg-red-200">
                            right
                        </div>
                        <div className="w-11/12 lg:w-7/12 px-5 text-sm">
                            <SlideRight duration={2}>
                                <p>{data.text1}</p>
                                <p className="mt-5 ">{data.text2}</p>
                                <p className="mt-5 ">{data.text3}</p>
                                <Arguments
                                    arg1={data.argument1}
                                    arg2={data.argument2}
                                    arg3={data.argument3}
                                />
                                <Button className="mt-5 ">
                                    {data.buttonName}
                                </Button>
                            </SlideRight>
                        </div>
                    </div>
                )}
            </div>
        </SectionContainer>
    );
}

export default Solution;
