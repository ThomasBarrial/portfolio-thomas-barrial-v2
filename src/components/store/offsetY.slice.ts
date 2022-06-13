import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

interface IOffsetY {
    offsetY: number;
}

interface ReturnOffsetYFromStore {
    scrollPosition: {
        offsetY: number;
    };
    dispatchOffsetY: (payload: number) => {
        payload: number;
    };
}

const initialState: IOffsetY = {
    offsetY: 0,
};

export const offsetYSlice = createSlice({
    name: "offsetY",
    initialState,
    reducers: {
        OffsetY: (state, action: PayloadAction<number>) => ({
            ...state,
            offsetY: action.payload,
        }),
    },
});

export const { OffsetY } = offsetYSlice.actions;

export const useOffsetYFromStore = (): ReturnOffsetYFromStore => {
    const scrollPosition = useSelector(
        (state: RootStateOrAny) => state.offsetY,
    );
    const dispatch = useDispatch();
    const dispatchOffsetY = (payload: number) => dispatch(OffsetY(payload));

    return { scrollPosition, dispatchOffsetY };
};

export default offsetYSlice.reducer;
