import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";

interface IProps {
    content: IDesign[];
}

function Designs({ content }: IProps): JSX.Element {
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
        <div className="w-full hidden lg:flex pb-14 h-designs xxl:h-designsLarge flex-col items-center overflow-hidden">
            <div
                ref={ref}
                className="absolute transform -translate-y-14 -translate-x-80"
            >
                {inView && (
                    <motion.p
                        variants={variants}
                        initial="closed"
                        animate="open"
                        className="font-bold  text-9xl  opacity-5"
                    >
                        DESIGN
                    </motion.p>
                )}
            </div>
            <Row1 content={content} />
            <Row2 content={content} />
        </div>
    );
}

export default Designs;
