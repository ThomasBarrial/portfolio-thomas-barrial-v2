import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SlideUp from "../animated/SlideUp";

function Skills({ content }: { content: ISkill[] }): JSX.Element {
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
            <div className="w-5/12 lg:w-5/12 h-96">
                {inView && (
                    <div className="flex flex-col space-y-2">
                        {content[0].skills.map((item, index) => (
                            <div key={item}>
                                <SlideUp duration={1.5 + index / 10}>
                                    {item}
                                </SlideUp>
                            </div>
                        ))}
                    </div>
                )}
                {inView && (
                    <div className="mt-20 flex flex-col space-y-2">
                        {content[1].skills.map((item, index) => (
                            <div key={item}>
                                <SlideUp duration={1.5 + index / 10}>
                                    {item}
                                </SlideUp>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="h-96">
                {inView && (
                    <div className="flex flex-col space-y-2">
                        {content[2].skills.map((item, index) => (
                            <div key={item}>
                                <SlideUp duration={1.5 + index / 10}>
                                    {item}
                                </SlideUp>
                            </div>
                        ))}
                    </div>
                )}
                {inView && (
                    <div className="mt-28 lg:mt-32 flex flex-col space-y-2">
                        {content[3].skills.map((item, index) => (
                            <div key={item}>
                                <SlideUp duration={1.5 + index / 10}>
                                    {item}
                                </SlideUp>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;
