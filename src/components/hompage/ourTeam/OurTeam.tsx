import React from "react";
// import { ActionType } from "../../../context/Actions";
// import { AppContext } from "../../../context/AppContext";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";
import bg5 from "../../../../public/bg5.png";

function OurTeam(): JSX.Element {
    // const { dispatch } = useContext(AppContext);
    // useEffect(() => {
    //     dispatch({
    //         type: ActionType.SetIndex,
    //         payload: 5,
    //     });
    // }, []);

    return (
        <SectionContainer id="Team" BG={bg5}>
            <div className={`${contentClass} text-center`}>Section4</div>
        </SectionContainer>
    );
}

export default OurTeam;
