import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/dist/client/image";
import { useIsLoaderFromStore } from "../store/isLoader.slice";

interface IProps {
    content: IHeroBanner;
}

function HeroBanner({ content }: IProps): JSX.Element {
    const { inView, ref } = useInView();
    const { isLoader } = useIsLoaderFromStore();

    const variantTitle = {
        open: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1 },
        },
        closed: {
            scale: 1.2,
            opacity: 0,
            transition: { duration: 1 },
        },
    };

    const variantStrokeAnim = {
        open: {
            y: 0,
            transition: { type: "spring", duration: 2, bounce: 0.1 },
        },
        closed: {
            y: "300px",
            transition: { type: "spring", duration: 2, bounce: 0.1 },
        },
    };

    const variantCrossAnim = {
        open: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", duration: 2, bounce: 0.1 },
        },
        closed: {
            scale: 0,
            opacity: 0,
            transition: { type: "spring", duration: 2, bounce: 0.1 },
        },
    };
    return (
        <div className="flex flex-col h-screen w-full items-center justify-center">
            <div ref={ref}>
                {inView && !isLoader.active && (
                    <motion.div
                        variants={variantTitle}
                        initial="closed"
                        animate="open"
                        className="flex flex-col items-center mb-12"
                    >
                        <h1 className=" text-7xl md:text-9xl text-center font-teko">
                            {content.myName}
                        </h1>
                        <h2 className="font-montserrat text-center transform -translate-y-2 text-3xl">
                            {content.profilTitle}
                        </h2>
                    </motion.div>
                )}
            </div>
            {inView && !isLoader.active && (
                <motion.div
                    variants={variantCrossAnim}
                    initial="closed"
                    animate="open"
                    className="absolute bottom-40 lg:bottom-72"
                >
                    <Image src="/icons/cross.svg" height={22} width={22} />
                </motion.div>
            )}
            {!isLoader.active && (
                <motion.div
                    variants={variantStrokeAnim}
                    initial="closed"
                    animate="open"
                    className="h-96 lg:h-100 w-0.5 rounded absolute -bottom-56  bg-black"
                />
            )}
            {!isLoader.active && (
                <p className="font-montserrat text-xs md:text-base absolute bottom-5 left-5 lg:bottom-10 lg:left-10 animate-fadeIn">
                    {content.availableDate}
                </p>
            )}
        </div>
    );
}

export default HeroBanner;
