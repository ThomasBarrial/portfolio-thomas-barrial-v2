import React from "react";
// import { ActionType } from "../../../context/Actions";
// import { AppContext } from "../../../context/AppContext";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";
import bg2 from "../../../../public/bg2.png";

function RoadMap(): JSX.Element {
    // const { dispatch } = useContext(AppContext);

    // useEffect(() => {
    //     dispatch({
    //         type: ActionType.SetIndex,
    //         payload: 2,
    //     });
    // }, []);

    return (
        <SectionContainer id="Roadmap" BG={bg2}>
            <div className={contentClass}>Section2</div>
        </SectionContainer>
    );
}

export default RoadMap;
