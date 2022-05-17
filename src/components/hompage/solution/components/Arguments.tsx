import React from "react";

interface IProps {
    arg1: string;
    arg2: string;
    arg3: string;
}

function Arguments({ arg1, arg2, arg3 }: IProps): JSX.Element {
    return (
        <div className="mt-5">
            <div
                className="flex items-center"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(72, 173, 255, 0.6) -7.3%, rgba(72, 173, 255, 0) 50%)",
                }}
            >
                <div className="h-9 mr-2 w-2 bg-blue" />
                <p className="text-sm">{arg1}</p>
            </div>
            <div
                className="flex items-center mt-4"
                style={{
                    background:
                        "linear-gradient(90deg, #42206D -7.22%, rgba(64, 32, 107, 0) 50%)",
                }}
            >
                <div className="h-9 mr-2 w-2 bg-purple" />
                <p className="text-sm">{arg2}</p>
            </div>
            <div
                className="flex items-center mt-4"
                style={{
                    background:
                        "linear-gradient(90deg, #054F40 -4.2%, rgba(5, 79, 65, 0) 53.54%)",
                }}
            >
                <div className="h-9 mr-2 w-2 bg-green" />
                <p className="text-sm">{arg3}</p>
            </div>
        </div>
    );
}

export default Arguments;
