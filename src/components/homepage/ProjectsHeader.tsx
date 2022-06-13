import React from "react";
import Image from "next/dist/client/image";
import { motion } from "framer-motion";

interface IProps {
    inView: boolean;
    projectNumber: string;
}

export default function ProjectsHeader({
    inView,
    projectNumber,
}: IProps): JSX.Element {
    const variants = {
        open: {
            x: 0,
            transition: { type: "spring", duration: 3, bounce: 0.1 },
        },
        closed: {
            x: "500px",
            transition: { type: "spring", duration: 3, bounce: 0.1 },
        },
    };
    return (
        <>
            <div className="flex items-end">
                <p className="font-bold font-teko text-5xl">{projectNumber}</p>
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
                        className="font-bold text-7xl lg:text-8xl  opacity-5"
                    >
                        PROJECT
                    </motion.p>
                )}
            </div>
        </>
    );
}
