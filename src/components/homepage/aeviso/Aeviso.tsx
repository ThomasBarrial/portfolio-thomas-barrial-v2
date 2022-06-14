import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectsHeader from "../wildstory/components/ProjectsHeader";
import ProjectName from "../wildstory/components/ProjectName";
import ProjectDetails from "../wildstory/components/ProjectDetails";
import ProjectDescription from "./components/ProjectDescription";
import DesktopImages from "./components/DesktopImages";
import { urlFor } from "../../../../sanity";
import MobileImage from "./components/MobileImage";

interface IProps {
    content: IProjects;
}

function Aeviso({ content }: IProps): JSX.Element {
    const { inView, ref } = useInView();

    return (
        <div className="flex lg:mb-52 flex-col items-center lg:flex-row max-w-7xl mx-auto justify-between">
            <div ref={ref} className="w-11/12 lg:w-5/12 flex flex-col">
                <ProjectsHeader
                    inView={inView}
                    projectNumber={content.projectNumber}
                />
                <div className="mt-72 font-montserrat text-lg">
                    <ProjectName projectName={content.projectName} />

                    <ProjectDetails
                        duration={content.duration}
                        technicalStack={content.technicalStack}
                        projectType={content.projectType}
                    />

                    <ProjectDescription
                        description={content.description}
                        description2={content.description2}
                    />
                </div>
            </div>
            <DesktopImages
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

export default Aeviso;
