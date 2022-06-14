import React, { useEffect, useState } from "react";
import { useOffsetYFromStore } from "../../store/offsetY.slice";
import DownloadCVButton from "./components/DownloadCVButton";
import PhrasePhoto from "./components/PhrasePhoto";
import Shadow from "./components/Shadow";
import SocialLinks from "./components/SocialLinks";

function Footer({ content }: { content: IFooter }): JSX.Element {
    const [value, setValue] = useState(6400);
    const { scrollPosition } = useOffsetYFromStore();

    useEffect(() => {
        if (window.innerHeight >= 1200) {
            setValue(7200);
        } else {
            setValue(6400);
        }
    }, [scrollPosition.offsetY]);

    return (
        <div className="w-full hidden lg:flex flex-col pt-32  overflow-hidden bg-footer  mx-auto">
            <Shadow />
            <div
                className="w-9/12  pt-5  items-center  h-96 mx-auto"
                style={{
                    transform: `translateY(${
                        (scrollPosition.offsetY - value) * 0.5
                    }px`,
                }}
            >
                <PhrasePhoto
                    photo={content.photo}
                    catchPhrase={content.catchPhrase}
                />
                <hr className="bg-white w-full mt-24" />
                <DownloadCVButton />
                <div className="flex space-x-8 text-white mt-10 font-montserrat text-lg">
                    <p>{content.phoneNumber}</p>
                    <p>{content.email}</p>
                </div>
            </div>
            <div className="justify-between mt-10  p-10 flex text-white font-montserrat">
                <p>{content.copyrights}</p>
                <SocialLinks socialMedia={content.socialMedia} />
            </div>
        </div>
    );
}

export default Footer;
