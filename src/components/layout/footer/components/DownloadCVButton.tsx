import React, { useState } from "react";
import { useOffsetYFromStore } from "../../../store/offsetY.slice";

function DownloadCVButton(): JSX.Element {
    const [isHover, setIsHover] = useState(false);
    const { scrollPosition } = useOffsetYFromStore();
    return (
        <button
            onMouseEnter={() => {
                setIsHover(true);
            }}
            onMouseLeave={() => setIsHover(false)}
            className="h-40 w-40 absolute bg-button border overflow-hidden border-white text-white rounded-full font-montserrat"
            type="button"
            style={{
                transform: `translate(${
                    (scrollPosition.offsetY - 4500) * 0.5
                }px, -80px`,
            }}
        >
            <p>Download CV</p>
            <a
                href="https://online.flippingbook.com/view/220132912/"
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`bg-white h-44 z-10 w-44 flex items-center justify-center  rounded-full absolute transform ${
                    isHover ? "-translate-y-24 scale-110" : "translate-y-24"
                } -translate-x-2  duration-1000`}
            >
                <p className={`text-black ${isHover && "animate-fadeIn"} `}>
                    Download CV
                </p>
            </a>
        </button>
    );
}

export default DownloadCVButton;
