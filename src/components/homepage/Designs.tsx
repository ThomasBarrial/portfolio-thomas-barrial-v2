import Image from "next/dist/client/image";
import React, { useEffect, useState } from "react";

interface IProps {
    offsetY: number;
}

function Designs({ offsetY }: IProps): JSX.Element {
    return (
        <div
            className="w-screen   flex flex-col items-center overflow-hidden"
            style={{
                height: "800px",
            }}
        >
            <div
                className="flex space-x-5 ml-52 h-4/6"
                style={{
                    transform: `translateX(-${(offsetY / 2) * 0.2}px`,
                    width: "160%",
                    paddingLeft: "700px",
                }}
            >
                <div>
                    <Image src="/design1.png" height={500} width={600} />
                </div>
                <div>
                    <Image src="/design4.png" height={500} width={600} />
                </div>
                <div>
                    <Image src="/design3.png" height={500} width={600} />
                </div>
                <div>
                    <Image src="/design6.png" height={500} width={600} />
                </div>
            </div>
            <div
                className="flex space-x-5 mt-5 mr-52 h-4/6"
                style={{
                    transform: `translateX(${(offsetY / 2) * 0.2}px)`,
                    width: "160%",
                    paddingRight: "700px",
                }}
            >
                <div>
                    <Image src="/design8.png" height={500} width={600} />
                </div>
                <div>
                    <Image src="/design2.png" height={500} width={600} />
                </div>
                <div>
                    <Image src="/design5.png" height={500} width={600} />
                </div>
                <div>
                    <Image src="/design7.png" height={500} width={600} />
                </div>
            </div>
        </div>
    );
}

export default Designs;
