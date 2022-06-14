import React from "react";

function Shadow(): JSX.Element {
    return (
        <div
            className=" absolute w-full z-10 transform -translate-y-52 h-20"
            style={{
                boxShadow: " 0px 20px 15px 0px rgba(0,0,0, 0.8)",
            }}
        />
    );
}

export default Shadow;
