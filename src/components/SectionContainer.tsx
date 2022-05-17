import React from "react";

interface IProps {
    children: React.ReactNode;
    BG: string;
    id: string;
}

function SectionContainer({ children, BG, id }: IProps): JSX.Element {
    return (
        <div
            id={id}
            className="h-full  min-h-screen w-full lg:h-screen font-raleway text-white flex items-start md:items-center lg:items-center justify-center"
            style={{
                background: `${
                    BG === "top"
                        ? "linear-gradient(150.0deg, #174B75 0%, #000101 94.37%)"
                        : "linear-gradient(30.0deg, #174B75 0%, #000101 94.37%)"
                }`,
            }}
        >
            {children}
        </div>
    );
}

export default SectionContainer;
