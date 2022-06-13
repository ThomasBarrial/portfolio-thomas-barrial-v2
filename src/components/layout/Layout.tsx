import React, { useEffect, useState } from "react";
import { useIsLoaderFromStore } from "../store/isLoader.slice";
import Loader from "./Loader";

interface IProps {
    children: React.ReactNode;
}

function Layout({ children }: IProps): JSX.Element {
    const { isLoader, dispatchToggleIsLoader } = useIsLoaderFromStore();
    const [loadAnim, setLoadAnim] = useState("");

    useEffect(() => {
        setInterval(() => {
            setLoadAnim("transform -translate-y-full duration-1000");
        }, 1500);
        setTimeout(() => {
            dispatchToggleIsLoader();
        }, 2500);
    }, []);

    return (
        <div>
            {isLoader.active && <Loader loadAnim={loadAnim} />}
            {children}
        </div>
    );
}

export default Layout;
