/* eslint-disable react/jsx-curly-brace-presence */

import React from "react";

import SlideUp from "../../animated/SlideUp";

import Icon from "./Icon";

interface IProps {
    socialLinks: ISocialLink[];
}

function SocialMedia({ socialLinks }: IProps): JSX.Element {
    return (
        <div className="text-left">
            <SlideUp duration={1.2} className="font-bold">
                Social Media
            </SlideUp>
            <SlideUp duration={1.5} className="text-sm">
                {"Don't miss anything, follow us"}
            </SlideUp>
            <SlideUp duration={1.8} className="flex mt-5">
                {socialLinks.map((item) => (
                    <a
                        href={item.link}
                        target="_blank"
                        className="mr-4"
                        key={item.name}
                        rel="noreferrer"
                    >
                        <Icon name={item.name} />
                    </a>
                ))}
            </SlideUp>
        </div>
    );
}

export default SocialMedia;
