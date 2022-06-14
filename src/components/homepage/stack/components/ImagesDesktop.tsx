import React from "react";
import Image from "next/dist/client/image";
import { useOffsetYFromStore } from "../../../store/offsetY.slice";

interface IProps {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
}

function ImagesDesktop({
    image1,
    image2,
    image3,
    image4,
}: IProps): JSX.Element {
    const { scrollPosition } = useOffsetYFromStore();
    return (
        <div className="hidden mt-64 lg:flex w-10/12">
            <div
                className=""
                style={{
                    transform: `translateY(-${
                        (scrollPosition.offsetY / 4) * 0.3
                    }px)`,
                }}
            >
                <Image src={image1} height={450} width={220} />
            </div>
            <div
                style={{
                    transform: `translate(-50px, -${
                        (scrollPosition.offsetY / 8) * 0.3
                    }px)`,
                }}
            >
                <Image src={image2} height={550} width={260} />
            </div>
            <div
                className=" mt-44"
                style={{
                    transform: `translate(-40px, -${
                        (scrollPosition.offsetY / 3) * 0.5
                    }px)`,
                }}
            >
                <Image src={image3} height={450} width={220} />
            </div>
            <div
                className=" mt-44 "
                style={{
                    transform: `translate(-100px, -${
                        (scrollPosition.offsetY / 3) * 0.3
                    }px)`,
                }}
            >
                <Image src={image4} height={550} width={260} />
            </div>
        </div>
    );
}

export default ImagesDesktop;
