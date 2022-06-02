import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/dist/client/image";

function HeroBanner(): JSX.Element {
    const { inView, ref } = useInView();
    const variants = {
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

    const variants2 = {
        open: {
            y: 0,
            transition: { type: "spring", duration: 2, bounce: 0.1 },
        },
        closed: {
            y: "300px",
            transition: { type: "spring", duration: 2, bounce: 0.1 },
        },
    };

    const variants3 = {
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
        <div className="flex flex-col h-screen w-screen items-center justify-center">
            <div ref={ref}>
                {inView && (
                    <motion.div
                        variants={variants}
                        initial="closed"
                        animate="open"
                        className="flex flex-col items-center mb-12"
                    >
                        <h1 className=" text-7xl md:text-9xl text-center font-teko">
                            Thomas Barrial
                        </h1>
                        <h2 className="font-montserrat transform -translate-y-2 text-3xl">
                            DEVELOPER & UI/UX DESIGNER
                        </h2>
                    </motion.div>
                )}
            </div>
            {inView && (
                <motion.div
                    variants={variants3}
                    initial="closed"
                    animate="open"
                    className="absolute bottom-72"
                >
                    <Image src="/icons/cross.svg" height={22} width={22} />
                </motion.div>
            )}
            <motion.div
                variants={variants2}
                initial="closed"
                animate="open"
                className="h-100 w-0.5 rounded absolute -bottom-56  bg-black"
            />

            <p className="font-montserrat text-xs md:text-base absolute bottom-10 left-10 animate-fadeIn">
                Avaliable in Septembre 2022
            </p>
        </div>
    );
}

export default HeroBanner;
