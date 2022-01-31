import React, { useContext } from 'react';
import { contentClass } from '../../../styles/contentClass';
import logo from '../../../../public/logotransparent.png';
import Image from 'next/image';
import Button from '../../buttons/Button';
import SlideDown from '../../animated/SlideDown';
import IsLoaderContext from '../../../context/isLoaderContext';
import SlideUp from '../../animated/SlideUp';

function Section1() {
  const { isLoader } = useContext(IsLoaderContext);
  return (
    <div className={`${contentClass} font-poppins`}>
      {!isLoader && (
        <div>
          <SlideDown duration={1.5} className="font-syncopate font-bold text-7xl text-center">
            SPEND COIN
          </SlideDown>
          <SlideDown duration={2} className="text-2xl mt-2 text-center">
            BUY EVERYTHING WITH CRYPTO
          </SlideDown>
          <SlideUp duration={2} className="text-center mt-5 font-poppins lg:mx-10  lg:text-lg">
            We aim to allow anyone to purchase goods in a decentralized way with a non custodial wallet. Spend coin team build customised e-shops
            called meta-shops. As a seller, you’ll be able to offer decentralized crypto-paiement to your customers and receive euros or
            crypto-currencies.{' '}
          </SlideUp>
          <SlideUp duration={1.5} className="mt-10 flex w-full justify-center">
            <Button className="lg:mx-4 mx-2">Meta Shop</Button>
            <Button className="lg:mx-4 mx-2">White Paper</Button>
          </SlideUp>
        </div>
      )}
      {!isLoader && (
        <div className="absolute mr-20">
          <Image className="animate-fadeIn" src={logo} alt="Picture of the author" width={250} height={700} />
        </div>
      )}
    </div>
  );
}

export default Section1;
