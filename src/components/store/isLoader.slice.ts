import { createSlice } from "@reduxjs/toolkit";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

interface IsLoaderState {
    active: boolean;
}

interface ReturnIsLoaderFromStore {
    isLoader: IsLoaderState;
    dispatchToggleIsLoader: () => {
        type: string;
    };
}

const initialState: IsLoaderState = {
    active: true,
};

export const isLoaderSlice = createSlice({
    name: "isLoader",
    initialState,
    reducers: {
        toggleIsLoader: (state) => ({ ...state, active: !state.active }),
    },
});

export const { toggleIsLoader } = isLoaderSlice.actions;

export const useIsLoaderFromStore = (): ReturnIsLoaderFromStore => {
    const isLoader = useSelector((state: RootStateOrAny) => state.isLoader);
    const dispatch = useDispatch();
    const dispatchToggleIsLoader = () => dispatch(toggleIsLoader());
    return { isLoader, dispatchToggleIsLoader };
};

export default isLoaderSlice.reducer;
