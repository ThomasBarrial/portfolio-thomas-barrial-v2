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
                backgroundImage: `url(${BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {children}
        </div>
    );
}

export default SectionContainer;
