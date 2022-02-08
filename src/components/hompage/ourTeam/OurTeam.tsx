import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ActionType } from '../../../context/Actions';
import { AppContext } from '../../../context/AppContext';
import contentClass from '../../../styles/contentClass';
import SlideUp from '../../animated/SlideUp';
import SectionContainer from '../../SectionContainer';
import bg5 from '../../../../public/bg5.png';

interface IProps {
  ourTeamText: OurTeamText;
}

function OurTeam({ ourTeamText }: IProps): JSX.Element {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [isAnim, setIsAnim] = useState(true);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (inView === false && window.innerWidth < 1200) {
      setIsAnim(true);
    } else {
      setIsAnim(inView);
    }
  });

  useEffect(() => {
    if (isAnim) {
      dispatch({
        type: ActionType.SetIndex,
        payload: 5,
      });
    }
  }, [isAnim]);

  return (
    <SectionContainer id="Team" BG={bg5}>
      <div ref={ref} className={`${contentClass} text-center`}>
        {isAnim && (
          <div className="w-full flex flex-col items-center justify-center">
            <SlideUp duration={1.5} className="font-syncopate font-bold text-4xl md:text-5xl">
              {ourTeamText.title}
            </SlideUp>
            {/* <SlideUp duration={2} className="flex flex-wrap items-center justify-center mt-10">
            {data.collaborators.map((item) => {
              return (
                <div key={item.name}>
                <Collaborator item={item} />
                </div>
                );
              })}
            </SlideUp> */}
            <SlideUp duration={1.5} className="font-poppins text-lg mt-10">
              {ourTeamText.subtitle}
            </SlideUp>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

export default OurTeam;
