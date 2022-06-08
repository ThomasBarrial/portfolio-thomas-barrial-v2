import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/dist/client/image";
import { motion } from "framer-motion";

interface IProps {
    offsetY: number;
}

function Aeviso({ offsetY }: IProps): JSX.Element {
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
        <div className="flex flex-col items-center lg:flex-row max-w-7xl mx-auto justify-between">
            <div className="w-10/12 lg:w-5/12 flex flex-col">
                <div className="flex items-end">
                    <p className="font-bold font-teko text-5xl">03</p>
                    <div className="mb-1 ml-1">
                        <Image src="/icons/cross.svg" width={20} height={20} />
                    </div>
                </div>
                <div ref={ref} className="absolute">
                    {inView && (
                        <motion.p
                            variants={variants}
                            initial="closed"
                            animate="open"
                            className="font-bold text-7xl lg:text-8xl  opacity-5"
                        >
                            PROJECT
                        </motion.p>
                    )}
                </div>
                <div className="mt-72 font-montserrat text-lg">
                    <h3
                        style={{
                            transform: `translateY(-${(offsetY / 8) * 0.5}px)`,
                        }}
                        className="font-teko text-8xl transform -translate-y-10  font-semibold"
                    >
                        AEVISO
                    </h3>

                    <div
                        style={{
                            transform: `translateY(-${(offsetY / 8) * 0.5}px)`,
                        }}
                    >
                        <div className="mt-5 font-semibold">
                            Fullstack project
                        </div>
                        <div className="font-semibold">Duration: 2 month</div>
                        <div className="font-semibold">
                            React/REST/Figma/ExpressNode/TS
                        </div>
                    </div>

                    <p
                        style={{
                            transform: `translateY(-${(offsetY / 7) * 0.5}px)`,
                        }}
                        className="mt-20 z-10 w-full lg:w-10/12"
                    >
                        L objectif principal de cette application Web est de
                        délcarer les heures de travail en recherche et
                        développement des collaborateurs d’une entreprise. Les
                        données
                    </p>

                    <p
                        style={{
                            transform: `translateY(-${(offsetY / 7) * 0.5}px)`,
                        }}
                        className="w-10/12 lg:w-5/12 max-w-2xl absolute"
                    >
                        sont accessibles depuis un dashbord et transmises à un
                        cabinet comptable qui est le porteur du projet.
                    </p>
                </div>
            </div>
            <div className="hidden lg:flex flex-col items-end ">
                <div style={{ transform: `translatex(-32px)` }}>
                    <Image
                        priority
                        src="/aeviso1.png"
                        height={480}
                        width={800}
                    />
                </div>
                <div
                    className="mt-44"
                    style={{
                        transform: `translateY(-${(offsetY / 8) * 1}px)`,
                    }}
                >
                    <Image
                        priority
                        src="/aeviso2.png"
                        height={350}
                        width={550}
                    />
                </div>
            </div>
            <div className="flex lg:hidden transform -translate-y-40 flex-col items-end w-11/12">
                <div>
                    <Image
                        priority
                        src="/aeviso1.png"
                        height={480}
                        width={800}
                    />
                </div>
                <div className="transform -translate-y-20 w-10/12">
                    <Image
                        priority
                        src="/aeviso2.png"
                        height={350}
                        width={550}
                    />
                </div>
            </div>
        </div>
    );
}

export default Aeviso;
