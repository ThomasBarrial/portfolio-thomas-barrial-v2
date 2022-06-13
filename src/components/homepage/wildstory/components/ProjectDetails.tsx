import React from "react";
import { useOffsetYFromStore } from "../../../store/offsetY.slice";

interface IProps {
    projectType: string;
    duration: string;
    technicalStack: string[];
}

function ProjectDetails({
    projectType,
    duration,
    technicalStack,
}: IProps): JSX.Element {
    const { scrollPosition } = useOffsetYFromStore();
    return (
        <div
            style={{
                transform: `translateY(-${
                    (scrollPosition.offsetY / 8) * 0.5
                }px)`,
            }}
        >
            <div className="mt-5 font-semibold">{projectType}</div>
            <div className="font-semibold">Duration: {duration}</div>
            <div className="font-semibold flex">
                {technicalStack.map((stack) => (
                    <p key={stack}>{stack}/</p>
                ))}
            </div>
        </div>
    );
}

export default ProjectDetails;
