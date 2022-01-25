import { createSlice } from "@reduxjs/toolkit";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

interface isContactState {
    active: boolean;
}

// TODO: Improve dispatch types
interface ReturnIsContactFromStore {
    isContact: isContactState;
    dispatchIsContact: () => {
        type: string;
    };
}

const initialState: isContactState = {
    active: false,
};

export const isContactSlice = createSlice({
    name: "isContact",
    initialState,
    reducers: {
        setIsContact: (state) => {
            return { ...state, active: !state.active };
        },
    },
});

export const { setIsContact } = isContactSlice.actions;

export const useisContactFromStore = (): ReturnIsContactFromStore => {
    const isContact = useSelector((state: RootStateOrAny) => state.isContact);
    const dispatch = useDispatch();
    const dispatchIsContact = () => dispatch(setIsContact());
    return { isContact, dispatchIsContact };
};

export default isContactSlice.reducer;
