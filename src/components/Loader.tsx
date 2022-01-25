import React from "react";

function Loader({ loadAnim }: { loadAnim: string }): JSX.Element {
    return (
        <div
            className={`h-screen w-screen bg-darkBlue z-50 fixed text-white ${loadAnim} flex flex-col items-center justify-center `}
            style={{
                backgroundImage: `url()`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            loader
        </div>
    );
}

export default Loader;
