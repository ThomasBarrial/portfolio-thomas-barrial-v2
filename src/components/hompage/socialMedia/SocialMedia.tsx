import React from "react";
// import { ActionType } from "../../../context/Actions";
// import { AppContext } from "../../../context/AppContext";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";
import bg2 from "../../../../public/bg2.png";

function SocialMedia(): JSX.Element {
    // const { dispatch } = useContext(AppContext);

    // useEffect(() => {
    //     dispatch({
    //         type: ActionType.SetIndex,
    //         payload: 6,
    //     });
    // }, []);
    return (
        <SectionContainer id="Links" BG={bg2}>
            <div className={contentClass}>section6</div>
        </SectionContainer>
    );
}

export default SocialMedia;
