import React from "react";

interface IProps {
    loadAnim: string;
}

function Loader({ loadAnim }: IProps): JSX.Element {
    return (
        <div
            className={`h-screen w-screen bg-footer flex flex-col items-center justify-center z-50 text-white fixed  ${loadAnim}`}
            style={{
                boxShadow: " 0px 20px 40px 0px rgba(0,0,0, 0.4)",
            }}
        >
            <div className="flex items-center justify-center animate-fadeIn ">
                <div className="w-40 h-40 border-t-4 border-b-4 border-white rounded-full animate-spin" />
            </div>
            <h2 className="text-white font-teko text-6xl animate-fadeIn mt-10">
                HELLO, WELCOME
            </h2>
        </div>
    );
}

export default Loader;
