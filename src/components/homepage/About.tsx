import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SlideUp from "../animated/SlideUp";

function About({ content }: { content: IAboutMe[] }): JSX.Element {
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
        <div className=" flex w-full h-screen overflow-hidden items-center justify-center">
            <div ref={ref} className="max-w-7xl">
                {inView && (
                    <SlideUp duration={1.2}>
                        <h3 className="font-montserrat text-3xl uppercase w-11/12  lg:w-12/12 mx-auto leading-normal font-medium">
                            {content[1].value}
                        </h3>
                    </SlideUp>
                )}
            </div>

            <div className="absolute w-9/12 overflow-hidden lg:left-1/4 mt-20  transform lg:-translate-x-11 ">
                {inView && (
                    <motion.p
                        variants={variants}
                        initial="closed"
                        animate="open"
                        className="font-bold  text-8xl  opacity-5"
                    >
                        {content[0].value}
                    </motion.p>
                )}
            </div>
        </div>
    );
}

export default About;
