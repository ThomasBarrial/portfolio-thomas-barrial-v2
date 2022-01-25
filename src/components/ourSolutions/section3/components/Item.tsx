import React from "react";
import SlideDown from "../../../animated/SlideDown";
import SlideUp from "../../../animated/SlideUp";

interface IProps {
    item: {
        title: string;
        text: string;
    };
}

function Item({ item }: IProps): JSX.Element {
    return (
        <div>
            <SlideUp duration={1.8}>
                <p className="font-bold border-b border-pink pb-2 mb-2 text-xl">
                    {item.title}
                </p>
            </SlideUp>
            <SlideDown duration={2.2}>
                <p>{item.text}</p>
            </SlideDown>
        </div>
    );
}

export default Item;
