import React from "react";
import { useOffsetYFromStore } from "../../../store/offsetY.slice";

function PorjectDescription({
    description,
}: {
    description: string;
}): JSX.Element {
    const { scrollPosition } = useOffsetYFromStore();
    return (
        <p
            style={{
                transform: `translateY(-${
                    (scrollPosition.offsetY / 6) * 0.2
                }px)`,
            }}
            className="mt-2"
        >
            {description}
        </p>
    );
}

export default PorjectDescription;
