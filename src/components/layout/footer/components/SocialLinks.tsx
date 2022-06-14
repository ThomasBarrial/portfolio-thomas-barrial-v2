/* eslint-disable no-underscore-dangle */
import React from "react";

interface IProps {
    socialMedia: ISocialMedia[];
}

function SocialLinks({ socialMedia }: IProps): JSX.Element {
    return (
        <div className="flex space-x-5">
            {socialMedia.map((item) => (
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    key={item._key}
                >
                    {item.name}
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
