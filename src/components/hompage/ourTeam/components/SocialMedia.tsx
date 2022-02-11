import React from "react";
import Image from "next/image";
import data from "../../../../data/homepage/socialLinks/socialIcons";

interface IProps {
    sm: ISocialLink;
}

function SocialMedia({ sm }: IProps): JSX.Element {
    const icon = data.filter(
        (i) => i.name.toLocaleLowerCase() === sm.name?.toLocaleLowerCase(),
    )[0];

    return (
        <div>
            <a className="mr-2" href={sm.link} target="_blank" rel="noreferrer">
                <Image
                    className="transform hover:scale-110 duration-700"
                    src={icon.src}
                    alt=""
                    height={18}
                    width={18}
                />
            </a>
        </div>
    );
}

export default SocialMedia;
