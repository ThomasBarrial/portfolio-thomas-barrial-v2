/* eslint-disable react/jsx-curly-brace-presence */

import React from "react";
import Image from "next/image";
import data from "../../../data/homepage/socialLinks/socialLinks";
import SlideUp from "../../animated/SlideUp";

function SocialMedia(): JSX.Element {
    return (
        <div className="text-left">
            <SlideUp duration={1.2} className="font-bold">
                Social Media
            </SlideUp>
            <SlideUp duration={1.5} className="text-sm">
                {"Don't miss anything, follow us"}
            </SlideUp>
            <SlideUp duration={1.8} className="flex mt-5">
                {data.map((item) => (
                    <a
                        href={item.link}
                        target="_blank"
                        className="mr-4"
                        key={item.name}
                        rel="noreferrer"
                    >
                        <Image
                            src={item.icon}
                            alt={item.name}
                            height={20}
                            width={20}
                        />
                    </a>
                ))}
            </SlideUp>
        </div>
    );
}

export default SocialMedia;
