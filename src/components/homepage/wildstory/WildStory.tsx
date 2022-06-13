import React from "react";
import Image from "next/dist/client/image";
import { useInView } from "react-intersection-observer";
import { urlFor } from "../../../../sanity";
import ProjectsHeader from "../ProjectsHeader";
import { useOffsetYFromStore } from "../../store/offsetY.slice";

interface IProps {
    content: IProjects;
}

function WildStory({ content }: IProps): JSX.Element {
    const { inView, ref } = useInView();
    const { scrollPosition } = useOffsetYFromStore();

    console.log(scrollPosition.offsetY);

    return (
        <div className="flex flex-col lg:flex-row w-11/12 lg:max-w-7xl mx-auto justify-between">
            <div ref={ref} className="w-full lg:w-5/12 flex flex-col">
                <ProjectsHeader
                    inView={inView}
                    projectNumber={content.projectNumber}
                />
                <div className="mt-32 lg:mt-72 font-montserrat text-lg">
                    <h3
                        style={{
                            transform: `translateY(-${
                                (scrollPosition.offsetY / 8) * 0.5
                            }px)`,
                        }}
                        className="font-teko text-7xl lg:text-8xl transform -translate-y-10  font-semibold"
                    >
                        {content.projectName}
                    </h3>

                    <div
                        style={{
                            transform: `translateY(-${
                                (scrollPosition.offsetY / 8) * 0.5
                            }px)`,
                        }}
                    >
                        <div className="mt-5 font-semibold">
                            {content.projectType}
                        </div>
                        <div className="font-semibold">{content.duration}</div>
                        <div className="font-semibold flex">
                            {content.technicalStack.map((stack) => (
                                <p>{stack}/</p>
                            ))}
                        </div>
                    </div>

                    <p
                        style={{
                            transform: `translateY(-${
                                (scrollPosition.offsetY / 10) * 0.5
                            }px)`,
                        }}
                        className="mt-2 lg:mt-0 lg:mr-5 z-10"
                    >
                        {content.description}
                    </p>

                    <p
                        style={{
                            transform: `translateY(-${
                                (scrollPosition.offsetY / 10) * 0.5
                            }px)`,
                        }}
                        className="w-10/12 max-w-2xl absolute"
                    >
                        {content.description2}
                    </p>
                </div>
            </div>
            <div className="lg:flex flex-col items-end hidden ">
                <div style={{ transform: `translatex(-32px)` }}>
                    <Image
                        priority
                        src={urlFor(content.images[0]).url()}
                        height={500}
                        width={750}
                    />
                </div>
                <div
                    className="transform"
                    style={{
                        transform: `translateY(-${
                            (scrollPosition.offsetY - 1000) * 0.2
                        }px)`,
                    }}
                >
                    <Image
                        priority
                        src={urlFor(content.images[1]).url()}
                        height={350}
                        width={550}
                    />
                </div>
            </div>
            <div className="flex lg:hidden mt-32  flex-col items-end w-11/12">
                <div>
                    <Image
                        priority
                        src={urlFor(content.images[0]).url()}
                        height={550}
                        width={800}
                    />
                </div>
                <div className="transform -translate-y-20 w-10/12">
                    <Image
                        priority
                        src={urlFor(content.images[1]).url()}
                        height={350}
                        width={550}
                    />
                </div>
            </div>
        </div>
    );
}

export default WildStory;
