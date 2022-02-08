import React from "react";
import Image from "next/image";

interface IProps {
    item: ISocialIcon;
}

function SocialIcon({ item }: IProps): JSX.Element {
    return (
        <a className="mx-2" href={item.link} target="_blank" rel="noreferrer">
            <Image
                className="transform hover:scale-110 duration-500"
                src={item.icon}
                alt={item.name}
                height={30}
                width={30}
            />
        </a>
    );
}

export default SocialIcon;
