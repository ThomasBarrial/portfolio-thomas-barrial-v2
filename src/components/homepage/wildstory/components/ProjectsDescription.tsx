import React from "react";
import { useOffsetYFromStore } from "../../../store/offsetY.slice";

interface IProps {
    description: string;
    description2: string;
}

function ProjectsDescription({
    description,
    description2,
}: IProps): JSX.Element {
    const { scrollPosition } = useOffsetYFromStore();
    return (
        <>
            <p
                style={{
                    transform: `translateY(-${
                        (scrollPosition.offsetY / 10) * 0.5
                    }px)`,
                }}
                className="mt-0 sm:mt-2  lg:mt-0 lg:mr-5 z-10"
            >
                {description}
            </p>

            <p
                style={{
                    transform: `translateY(-${
                        (scrollPosition.offsetY / 10) * 0.5
                    }px)`,
                }}
                className="w-10/12 max-w-2xl absolute"
            >
                {description2}
            </p>
        </>
    );
}

export default ProjectsDescription;
