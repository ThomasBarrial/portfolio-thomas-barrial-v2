import "../src/styles/global.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { useMemo, useReducer } from "react";
import { Provider } from "react-redux";
import { AppContext, AppContextDefault } from "../src/context/AppContext";
import appReducer from "../src/context/reducer/reducer";
import { store } from "../src/components/store";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [state, dispatch] = useReducer(appReducer, AppContextDefault);
    const app = useMemo(() => ({ state, dispatch }), []);

    return (
        <AppContext.Provider value={app}>
            <Provider store={store}>
                <div className="">
                    <Component {...pageProps} />
                </div>
            </Provider>
        </AppContext.Provider>
    );
}

export default MyApp;
