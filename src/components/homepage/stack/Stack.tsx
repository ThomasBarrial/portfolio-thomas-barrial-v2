import { useInView } from "react-intersection-observer";
import { urlFor } from "../../../../sanity";
import ImagesDesktop from "./components/ImagesDesktop";
import ImagesMobile from "./components/ImagesMobile";
import PorjectDescription from "./components/PorjectDescription";
import ProjectDetails from "./components/ProjectDetails";
import ProjectHeader from "./components/ProjectHeader";
import ProjectName from "./components/ProjectName";

interface IProps {
    content: IProjects;
}

function Stack({ content }: IProps): JSX.Element {
    const { inView, ref } = useInView();

    return (
        <div className="flex max-w-7xl mt-32 items-center flex-col mx-auto">
            <ProjectHeader
                inView={inView}
                projectNumber={content.projectNumber}
            />
            <div
                ref={ref}
                className="w-full flex lg:flex-row items-center flex-col-reverse"
            >
                <ImagesDesktop
                    image1={urlFor(content.images[0]).url()}
                    image2={urlFor(content.images[1]).url()}
                    image3={urlFor(content.images[2]).url()}
                    image4={urlFor(content.images[3]).url()}
                />
                <ImagesMobile
                    image1={urlFor(content.images[0]).url()}
                    image2={urlFor(content.images[1]).url()}
                    image3={urlFor(content.images[2]).url()}
                    image4={urlFor(content.images[3]).url()}
                />
                <div className="w-11/12 font-montserrat lg:w-5/12 mt-32 lg:mt-52 transform lg:-translate-x-16">
                    <ProjectName projectName={content.projectName} />
                    <ProjectDetails
                        projectType={content.projectType}
                        duration={content.duration}
                        technicalStack={content.technicalStack}
                    />
                    <PorjectDescription description={content.description} />
                </div>
            </div>
        </div>
    );
}

export default Stack;
