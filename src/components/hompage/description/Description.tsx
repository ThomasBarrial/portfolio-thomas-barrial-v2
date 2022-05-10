import React from "react";
// import { ActionType } from "../../../context/Actions";
// import { AppContext } from "../../../context/AppContext";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";

function Description(): JSX.Element {
    // const { dispatch } = useContext(AppContext);

    // useEffect(() => {
    //     dispatch({
    //         type: ActionType.SetIndex,
    //         payload: 3,
    //     });
    // }, []);

    return (
        <SectionContainer id="About" BG="top">
            <div className={contentClass}>section3</div>
        </SectionContainer>
    );
}

export default Description;
