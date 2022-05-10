import React from "react";
import contentClass from "../../../styles/contentClass";
// import { AppContext } from "../../../context/AppContext";
// import { ActionType } from "../../../context/Actions";
import SectionContainer from "../../SectionContainer";
import bg from "../../../../public/bgspendcoin.png";

function Landing(): JSX.Element {
    // const { dispatch } = useContext(AppContext);
    // useEffect(() => {
    //     dispatch({
    //         type: ActionType.SetIndex,
    //         payload: 1,
    //     });
    // }, []);

    return (
        <SectionContainer id="Home" BG={bg}>
            <div className={`${contentClass} font-poppins text-center`}>
                HomeSection
            </div>
        </SectionContainer>
    );
}

export default Landing;
