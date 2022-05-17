import React from "react";
import Image from "next/image";
import Button from "./buttons/Button";
import { useisContactFromStore } from "./store/isContactContext.slice";

function WaitingScreen(): JSX.Element {
    const { dispatchIsContact } = useisContactFromStore();
    return (
        <div
            className="h-full z-40 fixed  min-h-screen w-full lg:h-screen font-raleway text-white flex flex-col items-start md:items-center lg:items-center justify-center"
            style={{
                background:
                    "linear-gradient(150.0deg, #174B75 0%, #000101 94.37%)",
            }}
        >
            <Image src="/landingImage.png" width={560} height={573} priority />

            <div className="animate-rotateInfinite mt-5">
                <Image src="/Settings.png" height={50} width={50} />
            </div>
            <h4 className="text-4xl animate-pulse mt-2">
                The webiste is building ...
            </h4>

            <Button
                onClick={() => dispatchIsContact()}
                className="mt-5 w-full lg:w-4/12 flex items-center mb-32 justify-center"
            >
                ContactUs
            </Button>
        </div>
    );
}

export default WaitingScreen;
