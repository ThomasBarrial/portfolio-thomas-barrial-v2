import React from "react";
import Image from "next/dist/client/image";
import { useOffsetYFromStore } from "../../../store/offsetY.slice";

interface IProps {
    image1: string;
    image2: string;
}

function DesktopImage({ image1, image2 }: IProps): JSX.Element {
    const { scrollPosition } = useOffsetYFromStore();

    return (
        <div className="lg:flex flex-col items-end hidden ">
            <div style={{ transform: `translatex(-32px)` }}>
                <Image priority src={image1} height={500} width={750} />
            </div>
            <div
                className="transform"
                style={{
                    transform: `translateY(-${
                        (scrollPosition.offsetY - 1000) * 0.2
                    }px)`,
                }}
            >
                <Image priority src={image2} height={350} width={550} />
            </div>
        </div>
    );
}

export default DesktopImage;
