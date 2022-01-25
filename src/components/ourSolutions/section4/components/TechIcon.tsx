import React from "react";
import SlideDown from "../../../animated/SlideDown";
import Image from "next/image";

interface IProps {
    item: {
        name: string;
        link: string;
        width: number;
        height: number;
    };
}

function TechIcon({ item }: IProps): JSX.Element {
    return (
        <SlideDown duration={1.8} className="lg:mx-2">
            <Image
                src={item.link}
                alt={item.name}
                height={item.height}
                width={item.width}
            />
        </SlideDown>
    );
}

export default TechIcon;
