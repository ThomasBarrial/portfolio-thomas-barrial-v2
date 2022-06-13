import React from "react";

import { useInView } from "react-intersection-observer";
import { urlFor } from "../../../../sanity";
import ProjectsHeader from "../ProjectsHeader";
import ProjectName from "./components/ProjectName";
import ProjectDetails from "./components/ProjectDetails";
import ProjectsDescription from "./components/ProjectsDescription";
import DesktopImage from "./components/DesktopImage";
import MobileImage from "./components/MobileImage";

interface IProps {
    content: IProjects;
}

function WildStory({ content }: IProps): JSX.Element {
    const { inView, ref } = useInView();

    return (
        <div className="flex flex-col lg:flex-row w-11/12 lg:max-w-7xl mx-auto justify-between">
            <div ref={ref} className="w-full lg:w-5/12 flex flex-col">
                <ProjectsHeader
                    inView={inView}
                    projectNumber={content.projectNumber}
                />
                <div className="mt-32 lg:mt-72 font-montserrat text-lg">
                    <ProjectName projectName={content.projectName} />
                    <ProjectDetails
                        projectType={content.projectType}
                        duration={content.duration}
                        technicalStack={content.technicalStack}
                    />
                    <ProjectsDescription
                        description={content.description}
                        description2={content.description2}
                    />
                </div>
            </div>
            <DesktopImage
                image1={urlFor(content.images[0]).url()}
                image2={urlFor(content.images[1]).url()}
            />

            <MobileImage
                image1={urlFor(content.images[0]).url()}
                image2={urlFor(content.images[1]).url()}
            />
        </div>
    );
}

export default WildStory;
