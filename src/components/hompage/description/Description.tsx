import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ActionType } from '../../../context/Actions';
import { AppContext } from '../../../context/AppContext';
import { contentClass } from '../../../styles/contentClass';
import SlideUp from '../../animated/SlideUp';
import Button from '../../buttons/Button';
import { useisContactFromStore } from '../../store/isContactContext.slice';

function Description() {
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
        payload: 3,
      });
    }
  }, [isAnim]);
  return (
    <div ref={ref} className={contentClass}>
      {isAnim && (
        <div>
          <SlideUp duration={1.2} className="text-center font-poppins">
            Our goal is to improve the crypto adoption. To do so, our end goal is to allow anyone to purchase goods in a decentralized way with a
            non-custodial wallet (Metamask).
          </SlideUp>
          <SlideUp duration={1.5} className="text-center font-poppins mt-5">
            So far the crypto user base is kind of untouched by the e-commerce industry. As a consumer it is difficult to find an eshop accepting
            crypto-currencies. However, as a seller credit card fees can be up to 7%. Accepting crypto-currencies could save you those credit card
            fees! Tomorrow, anyone will set a meta-shop as easily as he sets an e-shop with shopify. We’ll provide all the main e-commerce features
            that an e-shop needs.
          </SlideUp>
          <SlideUp duration={1.8} className="text-center mt-10 font-syncopate font-bold text-3xl">
            Bounties Coming soon !
          </SlideUp>
          <SlideUp duration={2} className="text-center uppercase mt-2 font-poppins font-bold text-xl">
            do you have an interesting project to share ?
          </SlideUp>
          <SlideUp className="mt-8 flex flex-col lg:flex-row items-center justify-center" duration={2}>
            <Button className="mx-10">Read our manifesto</Button>
            <Button onClick={() => dispatchIsContact()} className="mx-10 mt-5 lg:mt-0">
              Contact Us
            </Button>
          </SlideUp>
        </div>
      )}
    </div>
  );
}

export default Description;
