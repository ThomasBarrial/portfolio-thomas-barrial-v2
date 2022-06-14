import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/dist/client/image";
import { urlFor } from "../../../../sanity";

function DesignsMobile({ content }: { content: IDesign[] }): JSX.Element {
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
    // console.log("content", content);

    return (
        <div className="w-full flex lg:hidden justify-center items-center">
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
                {content.map((item) => (
                    <div key={item._id} className="w-6/12 p-2">
                        <Image
                            className="transform hover:scale-105 duration-500"
                            src={urlFor(item.mainImage).url()}
                            height={500}
                            width={600}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DesignsMobile;
