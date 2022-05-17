import React, { useState } from "react";
import Image from "next/image";
import Button from "../buttons/Button";
import Icon from "./footer/Icon";

interface IProps {
    socialLinks: ISocialLink[];
}

function Navbar({ socialLinks }: IProps): JSX.Element {
    const [isOverlay, setIsOverlay] = useState(false);
    return (
        <div
            className="h-16 hidden fixed top-0 w-full text-sm justify-between md:flex items-center px-8 z-20"
            style={{
                background:
                    "linear-gradient(150.0deg, #174B75 30%, #000101 94.37%)",
                boxShadow: "10px 10px 45px rgba(0, 0, 0, 0.25)",
            }}
        >
            <div className="flex">
                <button
                    className="text-white mx-5 hover:text-blue"
                    type="button"
                >
                    Home
                </button>
                <button
                    className="text-white mx-5 hover:text-blue"
                    type="button"
                >
                    Our shops
                </button>
                <button
                    className="text-white mx-5 hover:text-blue"
                    type="button"
                >
                    About us
                </button>
                <button
                    className="text-white mx-5 hover:text-blue"
                    type="button"
                >
                    Bounties
                </button>
                <button
                    onClick={() => setIsOverlay((prev) => !prev)}
                    className="text-white mx-5 hover:text-blue flex items-center"
                    type="button"
                >
                    SocialMedia
                    <div
                        className={`ml-2  ${
                            !isOverlay
                                ? "transform duration-700 rotate-0 mt-1"
                                : "transform duration-700 rotate-180 mb-1"
                        }`}
                    >
                        <Image
                            src="/icons/arrowwhite.svg"
                            height={16}
                            width={16}
                            alt=""
                        />
                    </div>
                    <div className="absolute  top-14 h-64 overflow-hidden">
                        <div
                            className={`transform duration-700  pl-5 pr-8  py-2 rounded-md flex ${
                                isOverlay ? "translate-y-0" : "-translate-y-64"
                            }`}
                            style={{
                                background:
                                    "linear-gradient(150.0deg, #174B75 40%, #000101 94.37%)",
                            }}
                        >
                            {socialLinks.map((item) => (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    className="flex text-white  text-sm mx-4"
                                    key={item.name}
                                    rel="noreferrer"
                                >
                                    <Icon name={item.name} />
                                    <p className="ml-1">{item.name}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </button>
            </div>
            <Button className="">Open a metashop</Button>
        </div>
    );
}

export default Navbar;
