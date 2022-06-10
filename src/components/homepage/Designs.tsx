import Image from "next/dist/client/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface IProps {
    offsetY: number;
}

function Designs({ offsetY }: IProps): JSX.Element {
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
        <div className="w-screen pb-14 h-designs xxl:h-designsLarge flex flex-col items-center overflow-hidden">
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
            <div
                className="flex space-x-5 ml-52 w-design xxl:w-screen pl-design h-4/6"
                style={{
                    transform: `translateX(-${(offsetY / 2) * 0.2}px`,
                }}
            >
                <div>
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design1.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div>
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design4.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div>
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design3.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div>
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design6.png"
                        height={500}
                        width={600}
                    />
                </div>
            </div>
            <div
                className="flex space-x-5  w-design xxl:w-screen mr-52 h-4/6"
                style={{
                    transform: `translateX(${(offsetY / 2) * 0.2}px)`,

                    paddingRight: "700px",
                }}
            >
                <div>
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design8.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div>
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design2.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div>
                    <Image
                        className="transform hover:scale-105 duration-500"
                        src="/design5.png"
                        height={500}
                        width={600}
                    />
                </div>
                <div>
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

export default Designs;
