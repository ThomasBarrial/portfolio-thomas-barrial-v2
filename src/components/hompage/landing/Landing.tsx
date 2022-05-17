import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";
import Button from "../../buttons/Button";

function Landing(): JSX.Element {
    const { ref, inView } = useInView({ threshold: 0.2 });
    const [isAnim, setIsAnim] = useState(true);

    const handleClick = (id: string) => {
        const element = document.querySelector(`#${id}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (inView === false && window.innerWidth < 1200) {
            setIsAnim(true);
        } else {
            setIsAnim(inView);
        }
    });

    return (
        <SectionContainer id="Home" BG="top">
            <div
                ref={ref}
                className={`${contentClass} font-poppins text-center`}
            >
                {isAnim && (
                    <div className="animate-fadeIn">
                        <Image
                            src="/landingImage.png"
                            width={560}
                            height={573}
                            priority
                        />

                        {/* <div className="mt-10 lg:mt-10 lg:mb-24 md:flex">
                            <Button
                                onClick={() => handleClick("Solution")}
                                className="w-10/12 md:w-64 my-3 py-3 md:mx-8"
                            >
                                LE PROJET
                            </Button>
                            <Button className="w-10/12 md:w-64 my-3 py-3 md:mx-8">
                                LE TOKEN
                            </Button>
                            <Button className="w-10/12 md:w-64 my-3 py-3 md:mx-8">
                                ROADMAP
                            </Button>
                        </div> */}
                    </div>
                )}
            </div>
        </SectionContainer>
    );
}

export default Landing;
