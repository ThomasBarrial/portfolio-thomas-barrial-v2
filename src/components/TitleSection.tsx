import React from "react";
import Image from "next/image";

interface IProps {
    title: string;
}

function TitleSection({ title }: IProps): JSX.Element {
    return (
        <div className="flex font-roboto animate-fadeIn items-center">
            <h1 className="text-3xl z-10">{title}</h1>
            <h1 className="text-5xl opacity-10 absolute mt-5">{title}</h1>
            <div className="h-6 w-2 ml-2 bg-white z-10" />
            <div className="absolute ml-20">
                <Image src="/blur.png" height={120} width={120} />
            </div>
        </div>
    );
}

export default TitleSection;
