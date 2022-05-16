import React, { Dispatch, SetStateAction } from "react";

interface IProps {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

function Burger({ isActive, setIsActive }: IProps): JSX.Element {
    return (
        <button
            onClick={() => setIsActive((prev) => !prev)}
            type="button"
            className="md:hidden w-10 h-10 top-5 left-5 flex flex-col  justify-center z-50 fixed"
        >
            <div
                className={`bg-white h-1 w-9/12 mb-2 transform rounded-md ${
                    isActive
                        ? "-rotate-45 translate-y-3 translate-x-0 duration-500 w-full"
                        : "rotate-0 duration-500"
                }`}
            />
            <div
                className={`bg-white h-1 w-full mb-2 rounded-md transform ${
                    isActive
                        ? "rotate-45 duration-500"
                        : "rotate-0 duration-500"
                }`}
            />
            <div
                className={`bg-white h-1 transform w-5/12 mb-0 rounded-md ${
                    isActive
                        ? "-rotate-45 opacity-0 duration-500"
                        : "rotate-0 opacity-100 duration-500"
                }`}
            />
        </button>
    );
}

export default Burger;
