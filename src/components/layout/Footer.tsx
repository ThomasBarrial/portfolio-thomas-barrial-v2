/* eslint-disable react/jsx-curly-brace-presence */
import Image from "next/dist/client/image";
import React, { useEffect, useState } from "react";

function Footer({ offsetY }: { offsetY: number }): JSX.Element {
    const [value, setValue] = useState(6400);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        if (window.innerHeight >= 1200) {
            setValue(7200);
        } else {
            setValue(6400);
        }
    }, [offsetY]);

    return (
        <div className="w-screen pt-32  overflow-hidden bg-footer  mx-auto">
            <div
                className=" absolute w-screen z-10 transform -translate-y-52 h-20"
                style={{
                    boxShadow: " 0px 20px 15px 0px rgba(0,0,0, 0.8)",
                }}
            />
            <div
                className="max-w-5xl pt-10  items-center  h-96 mx-auto"
                style={{
                    transform: `translateY(${(offsetY - value) * 0.5}px`,
                }}
            >
                <div className="flex items-center">
                    <Image src="/me.png" height={80} width={80} />
                    <h3 className="font-bold ml-2 font-teko mt-2 text-white text-7xl">{`LET'S WORK TOGETHER`}</h3>
                </div>
                <hr className="bg-white w-full mt-16" />
                <button
                    onMouseEnter={() => {
                        setIsHover(true);
                    }}
                    onMouseLeave={() => setIsHover(false)}
                    className="h-40 w-40 absolute bg-button border overflow-hidden border-white text-white rounded-full font-montserrat"
                    type="button"
                    style={{
                        transform: `translate(${
                            (offsetY - 4800) * 0.5
                        }px, -80px`,
                    }}
                >
                    <p>Download CV</p>
                    <div
                        className={`bg-white h-44 z-10 w-44 flex items-center justify-center  rounded-full absolute transform ${
                            isHover
                                ? "-translate-y-24 scale-110"
                                : "translate-y-24"
                        } -translate-x-2  duration-1000`}
                    >
                        <p
                            className={`text-black ${
                                isHover && "animate-fadeIn"
                            } `}
                        >
                            Download CV
                        </p>
                    </div>
                </button>
                <div className="flex space-x-8 text-white mt-10 font-montserrat text-lg">
                    <p>07 78 02 28 23</p>
                    <p>thomas@barrial.fr</p>
                </div>
            </div>
            <div className="justify-between  p-10 flex text-white font-montserrat">
                <p>@edition 2022 develop & design by thomas barrial</p>
                <div className="flex space-x-5">
                    <a href="https://github.com/ThomasBarrial">github</a>
                    <a href="https://dribbble.com/DC_Studio">dribbble</a>
                    <a href="https://www.instagram.com/studio.digitalcopilote/">
                        instagram
                    </a>
                    <a href="https://www.linkedin.com/in/thomas-barrial-758a6a130/">
                        linkedin
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
