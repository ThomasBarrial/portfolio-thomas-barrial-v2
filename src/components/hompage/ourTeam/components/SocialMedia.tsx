import React from "react";
import Image from "next/image";

interface IProps {
    sm: ISocialLink;
}

function SocialMedia({ sm }: IProps): JSX.Element {
    return (
        <div>
            <a className="mr-2" href={sm.link} target="_blank" rel="noreferrer">
                <Image
                    className="transform hover:scale-110 duration-700"
                    src={sm.icon}
                    alt=""
                    height={18}
                    width={18}
                />
            </a>
        </div>
    );
}

export default SocialMedia;
