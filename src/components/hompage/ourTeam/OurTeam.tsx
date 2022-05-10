import React from "react";
// import { ActionType } from "../../../context/Actions";
// import { AppContext } from "../../../context/AppContext";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";

function OurTeam(): JSX.Element {
    // const { dispatch } = useContext(AppContext);
    // useEffect(() => {
    //     dispatch({
    //         type: ActionType.SetIndex,
    //         payload: 5,
    //     });
    // }, []);

    return (
        <SectionContainer id="Team" BG="top">
            <div className={`${contentClass} text-center`}>Section5</div>
        </SectionContainer>
    );
}

export default OurTeam;
