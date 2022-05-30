import React from "react";

// import SmoothScrollComponent from "./SmoothScrollComponent";

interface IProps {
    children: React.ReactNode;
}

function Layout({ children }: IProps): JSX.Element {
    return (
        <div>
            {/* <SmoothScrollComponent>
                <> */}
            {children}
            {/* </>
            </SmoothScrollComponent> */}
            {/* <Backtop /> */}
        </div>
    );
}

export default Layout;
