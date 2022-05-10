import React from "react";
// import { AppContext } from "../../../context/AppContext";
// import { ActionType } from "../../../context/Actions";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";
import bg4 from "../../../../public/bg4.png";

function Partners(): JSX.Element {
    // const { dispatch } = useContext(AppContext);

    // useEffect(() => {
    //     dispatch({
    //         type: ActionType.SetIndex,
    //         payload: 4,
    //     });
    // }, []);
    return (
        <SectionContainer id="Partners" BG={bg4}>
            <div className={contentClass}>Section5</div>
        </SectionContainer>
    );
}

export default Partners;
