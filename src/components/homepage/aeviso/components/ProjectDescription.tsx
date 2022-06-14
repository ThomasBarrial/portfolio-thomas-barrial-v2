import React from "react";
import { useOffsetYFromStore } from "../../../store/offsetY.slice";

interface IProps {
    description: string;
    description2: string;
}

function ProjectDescription({
    description,
    description2,
}: IProps): JSX.Element {
    const { scrollPosition } = useOffsetYFromStore();
    return (
        <>
            {" "}
            <p
                style={{
                    transform: `translateY(-${
                        (scrollPosition.offsetY / 7) * 0.5
                    }px)`,
                }}
                className="mt-20 lg:mt-14 z-10 w-full lg:w-10/12"
            >
                {description}
            </p>
            <p
                style={{
                    transform: `translateY(-${
                        (scrollPosition.offsetY / 7) * 0.5
                    }px)`,
                }}
                className="w-10/12 lg:w-5/12 max-w-2xl absolute"
            >
                {description2}
            </p>
        </>
    );
}

export default ProjectDescription;
