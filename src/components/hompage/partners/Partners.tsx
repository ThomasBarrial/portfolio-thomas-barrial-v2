import React, { useContext, useEffect, useState } from 'react';
import { sectionTitleClass } from '../../../styles/sectionTitleClass';
import SlideUp from '../../animated/SlideUp';
import partners from '../../../data/homepage/partners/partners';
import Partner from './components/Partner';
import { useInView } from 'react-intersection-observer';
import { AppContext } from '../../../context/AppContext';
import { ActionType } from '../../../context/Actions';
import { useisContactFromStore } from '../../store/isContactContext.slice';
import { contentClass } from '../../../styles/contentClass';

function Partners() {
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
    <div ref={ref} className={contentClass}>
      {isAnim && (
        <div className="w-full text-center ">
          <SlideUp className={sectionTitleClass} duration={2}>
            Our Partners
          </SlideUp>
          <SlideUp duration={1.8} className="flex flex-col items-center justify-center lg:flex-row w-9/12  lg:w-full my-10">
            {partners.map((item) => {
              return (
                <div className="lg:w-5/12 flex my-5 px-10 lg:border-r lg:border-l" key={item.name}>
                  <Partner item={item} />
                </div>
              );
            })}
          </SlideUp>
          <SlideUp duration={1.5} className="font-poppins uppercase text-lg mx-4">
            Want to take part of the project ? Contact us to become partner
          </SlideUp>
          <SlideUp duration={1.5} className="font-poppins mt-2">
            <button onClick={() => dispatchIsContact()} className="text-blue text-base underline">
              contactUs
            </button>
          </SlideUp>
        </div>
      )}
    </div>
  );
}

export default Partners;
