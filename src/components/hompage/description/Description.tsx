import React from "react";
// import { ActionType } from "../../../context/Actions";
// import { AppContext } from "../../../context/AppContext";
import contentClass from "../../../styles/contentClass";
import SectionContainer from "../../SectionContainer";
import bg3 from "../../../../public/bg3.png";

function Description(): JSX.Element {
    // const { dispatch } = useContext(AppContext);

    // useEffect(() => {
    //     dispatch({
    //         type: ActionType.SetIndex,
    //         payload: 3,
    //     });
    // }, []);

    return (
        <SectionContainer id="About" BG={bg3}>
            <div className={contentClass}>section3</div>
        </SectionContainer>
    );
}

export default Description;
