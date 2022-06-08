import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/dist/client/image";

function DesignsMobile(): JSX.Element {
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
        <div className="w-screen flex justify-center items-center">
            {" "}
            <div ref={ref} className="absolute transform -translate-y-96">
                {inView && (
                    <motion.p
                        variants={variants}
                        initial="closed"
                        animate="open"
                        className="font-bold text-7xl lg:text-9xl opacity-5"
                    >
                        DESIGN
                    </motion.p>
                )}
            </div>
            <div className="flex w-full flex-wrap">
                <div className="w-6/12 p-2">
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design1.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div className="w-6/12 p-2">
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design4.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div className="w-6/12 p-2">
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design2.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div className="w-6/12 p-2">
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design3.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div className="w-6/12 p-2">
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design6.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div className="w-6/12 p-2">
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design8.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div className="w-6/12 p-2">
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design5.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div className="w-6/12 p-2">
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design7.png"
                        height={500}
                        width={600}
                    />
                </div>
            </div>
        </div>
    );
}

export default DesignsMobile;
