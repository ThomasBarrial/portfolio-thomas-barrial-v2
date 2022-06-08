import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SlideUp from "../animated/SlideUp";

function Skills(): JSX.Element {
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
        <div className="max-w-7xl w-11/12 lg:w-full lg:min-h-screen flex font-montserrat md:text-xl lg:text-2xl mx-auto py-32 lg:py-80">
            <div ref={ref} />
            <div className="absolute transform translate-y-96">
                {inView && (
                    <motion.p
                        variants={variants}
                        initial="closed"
                        animate="open"
                        className="font-bold text-7xl lg:text-9xl  opacity-5"
                    >
                        SKILLS
                    </motion.p>
                )}
            </div>
            <div className="w-6/12 lg:w-5/12 h-96">
                {inView && (
                    <div className="flex flex-col space-y-2">
                        <SlideUp duration={2}>React</SlideUp>
                        <SlideUp duration={2.2}>React Native</SlideUp>
                        <SlideUp duration={2.4}>Typescript</SlideUp>
                        <SlideUp duration={2.6}>Tailwind</SlideUp>
                        <SlideUp duration={2.8}>Framer motion</SlideUp>
                    </div>
                )}
                {inView && (
                    <div className="mt-20 flex flex-col space-y-2">
                        <SlideUp duration={2}>NodeJS</SlideUp>
                        <SlideUp duration={2.2}>Prisma</SlideUp>
                        <SlideUp duration={2.4}>Express</SlideUp>
                        <SlideUp duration={2.6}>GraphQL</SlideUp>
                    </div>
                )}
            </div>
            <div className="h-96">
                {inView && (
                    <div className="flex flex-col space-y-2">
                        <SlideUp duration={2}>UI/UX</SlideUp>
                        <SlideUp duration={2.2}>Figma</SlideUp>
                        <SlideUp duration={2.4}>Responsive Design</SlideUp>
                        <SlideUp duration={2.6}>Prototyping</SlideUp>
                    </div>
                )}
                {inView && (
                    <div className="mt-28 lg:mt-32 flex flex-col space-y-2">
                        <SlideUp duration={2}>Firebase</SlideUp>
                        <SlideUp duration={2.2}>Sanity</SlideUp>
                        <SlideUp duration={2.4}>
                            Apllication architecture
                        </SlideUp>
                        <SlideUp duration={2.6}>Content management</SlideUp>
                        <SlideUp duration={2.8}>
                            Functionnal programming
                        </SlideUp>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;
