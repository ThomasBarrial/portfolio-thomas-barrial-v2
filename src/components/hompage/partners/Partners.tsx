import React, { useContext, useEffect, useState } from 'react';
import { containerClass } from '../../../styles/containerClass';
import { sectionTitleClass } from '../../../styles/sectionTitleClass';
import SlideUp from '../../animated/SlideUp';
import partners from '../../../data/homepage/partners/partners';
import Partner from './components/Partner';
import { useInView } from 'react-intersection-observer';
import { AppContext } from '../../../context/AppContext';
import { ActionType } from '../../../context/Actions';

function Partners() {
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
        payload: 3,
      });
    }
  }, [isAnim]);
  return (
    <div
      ref={ref}
      className="flex  min-h-container w-screen  flex-col items-center justify-center text-center border-t border-b border-blue bg-blue shadow-container bg-opacity-5 py-24">
      {isAnim && (
        <div>
          <SlideUp className={sectionTitleClass} duration={2}>
            Our Partners
          </SlideUp>
          <SlideUp duration={1.8} className="flex flex-col items-center justify-center lg:flex-row w-9/12 my-10">
            {partners.map((item) => {
              return (
                <div className="lg:w-1/3 my-5 lg:border-r lg:border-l px-4" key={item.name}>
                  <Partner item={item} />
                </div>
              );
            })}
          </SlideUp>
          <SlideUp duration={1.5} className="font-poppins text-lg mx-4">
            Want to take part of the project ? Contact us to become partner
          </SlideUp>
          <SlideUp duration={1.5} className="font-poppins mt-2">
            <button className="text-blue text-base underline">contactUs</button>
          </SlideUp>
        </div>
      )}
    </div>
  );
}

export default Partners;
