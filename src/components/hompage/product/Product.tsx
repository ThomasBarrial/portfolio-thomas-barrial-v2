import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";
import TitleSection from "../../TitleSection";

function Product({ data }: { data: IProduct }): JSX.Element {
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
        <SectionContainer id="Product" BG="top">
            <div ref={ref} className={contentClass}>
                {isAnim && <TitleSection title={data.title} />}
                {isAnim && (
                    <div>
                        <div className="mt-10 hidden lg:flex animate-fadeIn">
                            <Image
                                src={data.image}
                                width={1250}
                                height={530}
                                priority
                            />
                        </div>
                        <div className="mt-10 lg:hidden flex animate-fadeIn">
                            <Image
                                src={data.imageMobile}
                                height={760}
                                width={350}
                                priority
                            />
                        </div>
                    </div>
                )}
            </div>
        </SectionContainer>
    );
}

export default Product;
