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
            className={`${className}  btn`}
        >
            <p className=" px-8 py-2 transform hover:bg-opacity-0">
                {children}
            </p>
        </motion.button>
    );
}

export default Button;
