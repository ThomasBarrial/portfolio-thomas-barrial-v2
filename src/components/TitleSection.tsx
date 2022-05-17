import React from "react";

interface IProps {
    title: string;
}

function TitleSection({ title }: IProps): JSX.Element {
    return (
        <div className="flex font-roboto animate-fadeIn items-center justify-center">
            <h1 className="text-3xl z-10">{title}</h1>
            <h1 className="text-5xl font-bold opacity-5 absolute mt-5">
                {title}
            </h1>
            <div className="h-6 w-2 ml-2 bg-white z-10" />
        </div>
    );
}

export default TitleSection;
