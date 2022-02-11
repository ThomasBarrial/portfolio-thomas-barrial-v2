import React from "react";
import Image from "next/image";
import data from "../../../data/homepage/socialLinks/socialIcons";

function Icon({ name }: { name: string | undefined }): JSX.Element {
    const icon = data.filter(
        (i) => i.name.toLocaleLowerCase() === name?.toLocaleLowerCase(),
    )[0];
    return (
        <div>
            {" "}
            <Image src={icon.src} alt={name} height={20} width={20} />
        </div>
    );
}

export default Icon;
