import React from "react";
// import { ActionType } from "../../../context/Actions";
// import { AppContext } from "../../../context/AppContext";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";

function RoadMap(): JSX.Element {
    // const { dispatch } = useContext(AppContext);

    // useEffect(() => {
    //     dispatch({
    //         type: ActionType.SetIndex,
    //         payload: 2,
    //     });
    // }, []);

    return (
        <SectionContainer id="Roadmap" BG="bot">
            <div className={contentClass}>Section2</div>
        </SectionContainer>
    );
}

export default RoadMap;
