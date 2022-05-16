import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Icon from "./footer/Icon";

interface IProps {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    socialLinks: ISocialLink[];
}

function Sidebar({ setIsActive, isActive, socialLinks }: IProps): JSX.Element {
    const [isOverlay, setIsOverlay] = useState(false);

    return (
        <div
            style={{
                background:
                    "linear-gradient(150.0deg, #174B75 0%, #000101 94.37%)",
            }}
            className={`transform  ${
                isActive ? "translate-x-0" : "-translate-x-full"
            } flex flex-col lg:hidden px-2 text-lg pt-20 fixed w-screen items-start h-screen duration-500 z-40`}
        >
            <button
                className="text-white mx-5 my-2 hover:text-blue"
                type="button"
            >
                Home
            </button>
            <button
                className="text-white mx-5 my-2 hover:text-blue"
                type="button"
            >
                Our shops
            </button>
            <button
                className="text-white mx-5 my-2 hover:text-blue"
                type="button"
            >
                About us
            </button>
            <button
                className="text-white mx-5 my-2 hover:text-blue"
                type="button"
            >
                Bounties
            </button>
            <button
                onClick={() => setIsOverlay((prev) => !prev)}
                className="text-white mx-5 my-2 hover:text-blue flex"
                type="button"
            >
                SocialMedia
                <div
                    className={`ml-2  ${
                        !isOverlay
                            ? "transform duration-700 rotate-0 mt-1"
                            : "transform duration-700 rotate-180"
                    }`}
                >
                    <Image
                        src="/icons/arrowwhite.svg"
                        height={18}
                        width={18}
                        alt=""
                    />
                </div>
            </button>

            <div className="mx-6 h-64 overflow-hidden">
                <div
                    className={`transform duration-700 ${
                        isOverlay ? "translate-y-0" : "-translate-y-64"
                    }`}
                >
                    {socialLinks.map((item) => (
                        <a
                            href={item.link}
                            target="_blank"
                            className="flex text-white items-center text-sm my-2"
                            key={item.name}
                            rel="noreferrer"
                        >
                            <Icon name={item.name} />
                            <p className="ml-2">{item.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
