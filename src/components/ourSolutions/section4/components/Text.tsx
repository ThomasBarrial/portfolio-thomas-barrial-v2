import React from "react";
import SlideUp from "../../../animated/SlideUp";

interface IProps {
    item: {
        text: string;
    };
}

function Text({ item }: IProps): JSX.Element {
    return (
        <SlideUp duration={1.5} className="my-2">
            {item.text}
        </SlideUp>
    );
}

export default Text;
