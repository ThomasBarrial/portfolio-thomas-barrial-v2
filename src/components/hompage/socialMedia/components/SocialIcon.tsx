import React from "react";
import Image from "next/image";
import data from "../../../../data/homepage/socialLinks/socialIcons";

interface IProps {
    item: ISocialLink;
}

function SocialIcon({ item }: IProps): JSX.Element {
    const icon = data.filter(
        (i) => i.name.toLocaleLowerCase() === item.name?.toLocaleLowerCase(),
    )[0];

    return (
        <a className="mx-2" href={item.link} target="_blank" rel="noreferrer">
            <Image
                className="transform hover:scale-110 duration-500"
                src={icon.src}
                alt={item.name}
                height={30}
                width={30}
            />
        </a>
    );
}

export default SocialIcon;
