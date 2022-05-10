import React from "react";
// import { ActionType } from "../../../context/Actions";
// import { AppContext } from "../../../context/AppContext";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";

function SocialMedia(): JSX.Element {
    // const { dispatch } = useContext(AppContext);

    // useEffect(() => {
    //     dispatch({
    //         type: ActionType.SetIndex,
    //         payload: 6,
    //     });
    // }, []);
    return (
        <SectionContainer id="Links" BG="bot">
            <div className={contentClass}>section6</div>
        </SectionContainer>
    );
}

export default SocialMedia;
