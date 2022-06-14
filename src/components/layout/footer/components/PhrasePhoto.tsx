import React from "react";
import Image from "next/dist/client/image";
import { urlFor } from "../../../../../sanity";

interface IProps {
    photo: string;
    catchPhrase: string;
}

function PhrasePhoto({ photo, catchPhrase }: IProps): JSX.Element {
    return (
        <div className="flex items-center">
            <Image src={urlFor(photo).url()} height={80} width={80} />
            <h3 className="font-bold ml-2 font-teko mt-2 text-white text-7xl">
                {catchPhrase}
            </h3>
        </div>
    );
}

export default PhrasePhoto;
