import React from "react";
import { motion } from "framer-motion";

interface IProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

function Button({ children, className, onClick }: IProps): JSX.Element {
    return (
        <motion.button
            onClick={onClick}
            whileTap={{ scale: 1.2 }}
            type="button"
            className={`${className} bg-transparent z-40 transform border-blue text-blue font-semibold   duration-500 hover:bg-blue hover:scale-105 hover:bg-opacity-20 text-xs lg:text-sm rounded-md border px-10 py-2`}
        >
            {children}
        </motion.button>
    );
}

export default Button;
