/* eslint-disable react/jsx-curly-brace-presence */
import Image from "next/dist/client/image";
import React from "react";

function FooterMobile(): JSX.Element {
    return (
        <div className="w-screen pt-20 flex flex-col items-center justify-center overflow-hidden bg-footer  mx-auto">
            <div className="flex justify-center w-11/12 flex-col items-center">
                <Image src="/me.png" height={80} width={80} />
                <h3 className="font-bold ml-2 font-teko mt-2 text-white text-4xl">{`LET'S WORK TOGETHER`}</h3>
            </div>
            <hr className="bg-white w-full mt-8" />
            <div className="flex justify-between space-x-5 text-white mt-10 font-montserrat text-lg">
                <p>07 78 02 28 23</p>
                <p>thomas@barrial.fr</p>
            </div>
            <button className="mt-5 bg-white w-full py-5 " type="button">
                Download CV
            </button>
            <div className="flex-col  justify-between text-xs text-center  p-10 flex text-white font-montserrat">
                <div className="flex justify-center space-x-5">
                    <a href="https://github.com/ThomasBarrial">github</a>
                    <a href="https://dribbble.com/DC_Studio">dribbble</a>
                    <a href="https://www.instagram.com/studio.digitalcopilote/">
                        instagram
                    </a>
                    <a href="https://www.linkedin.com/in/thomas-barrial-758a6a130/">
                        linkedin
                    </a>
                </div>
                <p className="mt-5">
                    @edition 2022 develop & design by thomas barrial
                </p>
            </div>
        </div>
    );
}

export default FooterMobile;
