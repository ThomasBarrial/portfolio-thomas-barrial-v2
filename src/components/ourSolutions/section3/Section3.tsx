import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ActionType } from "../../../context/Actions";
import { AppContext } from "../../../context/AppContext";
import { contentClass } from "../../../styles/contentClass";
import data from "../../../data/ourSolutions/section3";
import Item from "./components/Item";

function Section3(): JSX.Element {
    const { ref, inView } = useInView();
    const [isAnim, setIsAnim] = useState(true);
    const { dispatch } = useContext(AppContext);

    useEffect(() => {
        if (inView === false && window.innerWidth < 1200) {
            setIsAnim(true);
        } else {
            setIsAnim(inView);
        }
    });

    useEffect(() => {
        if (isAnim) {
            dispatch({
                type: ActionType.SetIndex,
                payload: 3,
            });
        }
    }, [isAnim]);

    return (
        <div ref={ref} className={`${contentClass}`}>
            {isAnim && (
                <div className="flex flex-wrap">
                    {data.map((item) => {
                        return (
                            <div
                                className="w-full lg:w-1/3 my-5 lg:border-l lg:border-r px-5 text-center"
                                key={item.title}
                            >
                                <Item item={item} />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Section3;
