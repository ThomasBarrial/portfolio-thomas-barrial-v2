import React from "react";

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
