import Image from "next/dist/client/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IProps {
    offsetY: number;
}

function Stack({ offsetY }: IProps): JSX.Element {
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
        <div className="flex max-w-7xl mt-32 items-center flex-col mx-auto">
            <div className="flex items-end w-11/12 lg:w-full">
                <p className="font-bold font-teko text-5xl">02</p>
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
            <div className="w-full flex lg:flex-row items-center flex-col-reverse">
                <div className="hidden mt-64 lg:flex w-10/12">
                    <div
                        className=""
                        style={{
                            transform: `translateY(-${(offsetY / 4) * 0.3}px)`,
                        }}
                    >
                        <Image src="/stack1.png" height={450} width={220} />
                    </div>
                    <div
                        style={{
                            transform: `translate(-50px, -${
                                (offsetY / 8) * 0.3
                            }px)`,
                        }}
                    >
                        <Image src="/stack2.png" height={550} width={260} />
                    </div>
                    <div
                        className=" mt-44"
                        style={{
                            transform: `translate(-40px, -${
                                (offsetY / 3) * 0.5
                            }px)`,
                        }}
                    >
                        <Image src="/stack3.png" height={450} width={220} />
                    </div>
                    <div
                        className=" mt-44 "
                        style={{
                            transform: `translate(-100px, -${
                                (offsetY / 3) * 0.3
                            }px)`,
                        }}
                    >
                        <Image src="/stack4.png" height={550} width={260} />
                    </div>
                </div>
                <div className="flex lg:hidden mb-52 justify-center transform -translate-y-11 w-11/12">
                    <div className="">
                        <Image src="/stack1.png" height={630} width={300} />
                    </div>
                    <div>
                        <Image src="/stack2.png" height={700} width={330} />
                    </div>
                    <div>
                        <Image src="/stack3.png" height={620} width={300} />
                    </div>
                    <div>
                        <Image src="/stack4.png" height={700} width={330} />
                    </div>
                </div>
                <div className="w-11/12 lg:w-5/12 mt-32 lg:mt-52 transform lg:-translate-x-16">
                    <div className="font-montserrat">
                        <h3
                            style={{
                                transform: `translateY(-${
                                    (offsetY / 8) * 0.3
                                }px)`,
                            }}
                            className="font-teko text-8xl transform -translate-y-10  font-semibold"
                        >
                            STACK
                        </h3>
                        <div
                            style={{
                                transform: `translateY(-${
                                    (offsetY / 8) * 0.3
                                }px)`,
                            }}
                        >
                            <div className="mt-5 font-semibold">
                                FullStack Mobile Project
                            </div>
                            <div className="font-semibold">
                                Duration: 6 month
                            </div>
                            <div className="font-semibold">
                                ReactNative/TypeGraphQL/Figma/TS
                            </div>
                        </div>
                        <p
                            style={{
                                transform: `translateY(-${
                                    (offsetY / 6) * 0.2
                                }px)`,
                            }}
                            className="mt-2"
                        >
                            Dans le cadre de l’alternance, stack est un
                            gestionnaire de tâches semblable à notion sous forme
                            d’application mobile. Développé avec une équipe de 4
                            developpeurs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stack;
