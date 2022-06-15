import React from "react";
import Image from "next/dist/client/image";

interface IProps {
    image1: string;
    image2: string;
}

function MobileImage({ image1, image2 }: IProps): JSX.Element {
    return (
        <div className="flex lg:hidden mt-20 sm:mt-12  flex-col items-end sm:items-center w-full">
            <div>
                <Image priority src={image1} height={550} width={800} />
            </div>
            <div className="transform -translate-y-20 w-10/12">
                <Image priority src={image2} height={350} width={550} />
            </div>
        </div>
    );
}

export default MobileImage;
