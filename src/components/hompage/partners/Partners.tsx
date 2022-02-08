import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import sectionTitleClass from '../../../styles/sectionTitleClass';
import SlideUp from '../../animated/SlideUp';
import partners from '../../../data/homepage/partners/partners';
import Partner from './components/Partner';
import { AppContext } from '../../../context/AppContext';
import { ActionType } from '../../../context/Actions';
import { useisContactFromStore } from '../../store/isContactContext.slice';
import contentClass from '../../../styles/contentClass';
import SectionContainer from '../../SectionContainer';
import bg4 from '../../../../public/bg4.png';

function Partners(): JSX.Element {
  const { dispatchIsContact } = useisContactFromStore();
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
        payload: 4,
      });
    }
  }, [isAnim]);
  return (
    <SectionContainer id="Partners" BG={bg4}>
      <div ref={ref} className={contentClass}>
        {isAnim && (
          <div className="w-full text-center ">
            <SlideUp className={sectionTitleClass} duration={2}>
              Our Partners
            </SlideUp>
            <SlideUp duration={1.8} className="flex flex-col items-center justify-center lg:flex-row  w-full my-10">
              {partners.map((item) => (
                <div className="lg:w-5/12 flex my-5 px-10 lg:border-r lg:border-l" key={item.name}>
                  <Partner item={item} />
                </div>
              ))}
            </SlideUp>
            <SlideUp duration={1.5} className="font-poppins uppercase text-lg mx-4">
              Want to take part of the project ? Contact us to become partner
            </SlideUp>
            <SlideUp duration={1.5} className="font-poppins mt-2">
              <button type="button" onClick={() => dispatchIsContact()} className="text-blue text-base underline">
                contactUs
              </button>
            </SlideUp>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

export default Partners;
