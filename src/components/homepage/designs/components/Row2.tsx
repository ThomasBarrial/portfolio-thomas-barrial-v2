import React from "react";
import Image from "next/dist/client/image";
import { useOffsetYFromStore } from "../../../store/offsetY.slice";
import { urlFor } from "../../../../../sanity";

function Row2({ content }: { content: IDesign[] }): JSX.Element {
    const { scrollPosition } = useOffsetYFromStore();
    return (
        <div
            className="flex space-x-5  w-design xxl:w-screen mr-52 h-4/6"
            style={{
                transform: `translateX(${
                    (scrollPosition.offsetY / 2) * 0.2
                }px)`,

                paddingRight: "700px",
            }}
        >
            {content.map(
                (item, index) =>
                    index >= content.length / 2 && (
                        <div key={item._id}>
                            <Image
                                className="transform hover:scale-105 duration-500"
                                src={urlFor(item.mainImage).url()}
                                height={500}
                                width={600}
                            />
                        </div>
                    ),
            )}
        </div>
    );
}

export default Row2;
