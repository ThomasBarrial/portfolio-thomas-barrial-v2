import React from "react";
import { motion } from "framer-motion";

interface IProps {
    children?: React.ReactNode;
    className?: string;
}

function SlideRight({ children, className }: IProps): JSX.Element {
    const variants = {
        open: {
            x: 0,
            transition: { type: "spring", duration: 1.8, bounce: 0.1 },
        },
        closed: {
            x: "-300px",
            transition: { type: "spring", duration: 1.8, bounce: 0.1 },
        },
    };
    return (
        <div className="w-full overflow-hidden">
            <motion.div
                className={className}
                variants={variants}
                initial="closed"
                animate="open"
            >
                {children}
            </motion.div>
        </div>
    );
}

export default SlideRight;
