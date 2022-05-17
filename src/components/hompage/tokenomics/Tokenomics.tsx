import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import contentClass from "../../../styles/contentClass";
import SlideRight from "../../animated/SlideRight";
import SectionContainer from "../../SectionContainer";
import TitleSection from "../../TitleSection";

interface IProps {
    data: ITokenomics;
}

function Tokenomics({ data }: IProps): JSX.Element {
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
        <SectionContainer id="Tokenomics" BG="top">
            <div ref={ref} className={`${contentClass} text-center`}>
                {isAnim && <TitleSection title={data.title} />}
                {isAnim && (
                    <div className="flex flex-col-reverse lg:flex-row w-full items-center justify-center lg:mt-10 h-96">
                        <div className="lg:w-1/2 hidden lg:flex animate-fadeIn">
                            <Image src={data.image} height={360} width={450} />
                        </div>
                        <SlideRight
                            duration={2}
                            className="flex flex-col items-start lg:px-10"
                        >
                            <div className="flex items-start">
                                <div className="w-2 h-4 bg-blue mr-2 mt-1" />
                                <h4>{data.data1}</h4>
                            </div>
                            <div className="flex flex-col items-start ml-4 text-xs  lg:text-sm text-blue">
                                {data.data1Details}
                            </div>
                            <div className="flex items-start mt-6">
                                <div className="w-2 h-4 bg-lightBlue mr-2 mt-1" />
                                <h4>{data.data2}</h4>
                            </div>
                            <div className="flex flex-col items-start ml-4 text-xs  lg:text-sm text-lightBlue">
                                {data.data2Details}
                            </div>
                            <div className="flex items-start mt-6">
                                <div className="w-2 h-4 bg-ultraLightBlue mr-2 mt-1" />
                                <h4>{data.data3}</h4>
                            </div>
                            <div className="flex flex-col items-start mt-1 ml-4 text-xs lg:text-sm text-ultraLightBlue">
                                <p>{data.data3Details}</p>
                            </div>
                            <div className="flex items-start mt-6">
                                <div className="w-2 h-4 bg-smoothBlue mr-2 mt-1" />
                                <h4>{data.data4}</h4>
                            </div>
                            <div className="flex items-start mt-3">
                                <div className="w-2 h-4 bg-hardBlue mr-2 mt-1" />
                                <h4>{data.data5}</h4>
                            </div>
                        </SlideRight>
                    </div>
                )}
                {isAnim && (
                    <div className="flex items-center  w-full mt-10">
                        <div className="z-10 transform translate-x-6">
                            <Image src={data.token} height={80} width={80} />
                        </div>
                        <SlideRight duration={5}>
                            <div
                                className="flex flex-col lg:flex-row py-5 pl-10"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(72, 173, 255, 0.4) -19.33%, rgba(58, 129, 173, 0) 98.81%)",
                                }}
                            >
                                {data.tokenID.split("/").map((item) => (
                                    <div
                                        className="my-1 lg:my-0 mr-5 flex items-center"
                                        key={item}
                                    >
                                        <p className="text-blue mr-2">
                                            {item.split(":")[0]} :{" "}
                                        </p>
                                        <p> {item.split(":")[1]}</p>
                                    </div>
                                ))}
                                <div className="hidden lg:flex">
                                    <Image
                                        src="/logopolygone.png"
                                        height={20}
                                        width={27}
                                    />
                                </div>
                            </div>
                        </SlideRight>
                    </div>
                )}
            </div>
        </SectionContainer>
    );
}

export default Tokenomics;
