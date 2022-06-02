import React from "react";
import Image from "next/dist/client/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface IProps {
    offsetY: number;
}

function WildStory({ offsetY }: IProps): JSX.Element {
    const { inView, ref } = useInView();
    const variants = {
        open: {
            x: 0,
            transition: { type: "spring", duration: 3, bounce: 0.1 },
        },
        closed: {
            x: "600px",
            transition: { type: "spring", duration: 3, bounce: 0.1 },
        },
    };
    return (
        <div className="flex max-w-7xl mx-auto justify-between">
            <div className="w-5/12 flex flex-col">
                <div className="flex items-end">
                    <p className="font-bold font-teko text-5xl">01</p>
                    <div className="mb-1 ml-1">
                        <Image src="/icons/cross.svg" width={20} height={20} />
                    </div>
                </div>
                <div className="absolute">
                    {inView && (
                        <motion.p
                            variants={variants}
                            initial="closed"
                            animate="open"
                            className="font-bold  text-8xl  opacity-5"
                        >
                            PROJECT
                        </motion.p>
                    )}
                </div>
                <div ref={ref} className="mt-72 font-montserrat text-lg">
                    <h3
                        style={{
                            transform: `translateY(-${(offsetY / 8) * 0.5}px)`,
                        }}
                        className="font-teko text-8xl transform -translate-y-10  font-semibold"
                    >
                        WILDSTORY
                    </h3>

                    <div
                        style={{
                            transform: `translateY(-${(offsetY / 8) * 0.5}px)`,
                        }}
                    >
                        <div className="mt-5 font-semibold">
                            Fullstack project
                        </div>
                        <div className="font-semibold">Duration: 6 month</div>
                        <div className="font-semibold">
                            React/REST/Figma/ExpressNode/TS
                        </div>
                    </div>

                    <p
                        style={{
                            transform: `translateY(-${(offsetY / 7) * 0.5}px)`,
                        }}
                        className="mt-12"
                    >
                        Wildstory est un réseau sociale qui a pour but de
                        partager les connaissances, les offres
                    </p>

                    <p
                        style={{
                            transform: `translateY(-${(offsetY / 7) * 0.5}px)`,
                        }}
                        className="w-5/12 max-w-2xl absolute"
                    >
                        d’emploi, les résultats de veille ainsi que les
                        différents projets de tous les Wilders sans oublier les
                        problématiques liées au code. Développé en solo sur mon
                        temps libre.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-end ">
                <div style={{ transform: `translatex(-32px)` }}>
                    <Image
                        priority
                        src="/wildStory1.png"
                        height={550}
                        width={800}
                    />
                </div>
                <div
                    className="transform"
                    style={{
                        transform: `translateY(-${(offsetY / 2) * 0.3}px)`,
                    }}
                >
                    <Image
                        priority
                        src="/wildStory2.png"
                        height={350}
                        width={550}
                    />
                </div>
            </div>
        </div>
    );
}

export default WildStory;
