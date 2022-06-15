/* eslint-disable no-underscore-dangle */
import Image from "next/dist/client/image";
import React from "react";
import { urlFor } from "../../../sanity";

function FooterMobile({ content }: { content: IFooter }): JSX.Element {
    return (
        <div className="w-full flex lg:hidden pt-20  flex-col items-center justify-center overflow-hidden bg-footer  mx-auto">
            <div className="flex justify-center w-11/12 flex-col items-center">
                <Image
                    src={urlFor(content.photo).url()}
                    height={80}
                    width={80}
                />
                <h3 className="font-bold ml-2 font-teko mt-2 text-white text-4xl">
                    {content.catchPhrase}
                </h3>
            </div>
            <hr className="bg-white w-full mt-8" />
            <div className="flex justify-between space-x-5 text-white mt-10 font-montserrat text-lg">
                <p>{content.phoneNumber}</p>
                <p>{content.email}</p>
            </div>
            <a
                href="https://online.flippingbook.com/view/220132912/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 bg-white text-center w-full py-5 "
            >
                Download CV
            </a>
            <div className="flex-col  justify-between text-xs text-center  p-10 flex text-white font-montserrat">
                <div className="flex justify-center space-x-5">
                    {content.socialMedia.map((item) => (
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
                <p className="mt-5">{content.copyrights}</p>
            </div>
        </div>
    );
}

export default FooterMobile;
