import React from "react";
// import { AppContext } from "../../../context/AppContext";
// import { ActionType } from "../../../context/Actions";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";

function Partners(): JSX.Element {
    // const { dispatch } = useContext(AppContext);

    // useEffect(() => {
    //     dispatch({
    //         type: ActionType.SetIndex,
    //         payload: 4,
    //     });
    // }, []);
    return (
        <SectionContainer id="Partners" BG="bot">
            <div className={contentClass}>Section4</div>
        </SectionContainer>
    );
}

export default Partners;
