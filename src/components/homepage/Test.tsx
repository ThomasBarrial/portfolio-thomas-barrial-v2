import React from "react";

function Test(): JSX.Element {
    return (
        <div
            className="w-screen h-screen items-center justify-center flex bg-black bg-fixed"
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <p className=" fixed">Test</p>
        </div>
    );
}

export default Test;
