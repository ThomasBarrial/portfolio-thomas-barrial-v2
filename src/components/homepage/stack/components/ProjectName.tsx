import React from "react";
import { useOffsetYFromStore } from "../../../store/offsetY.slice";

function ProjectName({ projectName }: { projectName: string }): JSX.Element {
    const { scrollPosition } = useOffsetYFromStore();
    return (
        <h3
            style={{
                transform: `translateY(-${
                    (scrollPosition.offsetY / 8) * 0.3
                }px)`,
            }}
            className="font-teko text-8xl transform -translate-y-10  font-semibold"
        >
            {projectName}
        </h3>
    );
}

export default ProjectName;
