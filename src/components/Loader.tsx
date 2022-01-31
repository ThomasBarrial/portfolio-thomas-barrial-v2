import React from 'react';
import bg from '../../public/bgspendcoin.png';
import logo from '../../public/logo.png';
import Image from 'next/image';
import SlideLeft from './animated/SlideLeft';
import SlideRight from './animated/SlideRight';

function Loader({ loadAnim }: { loadAnim: string }): JSX.Element {
  return (
    <div className={`h-screen w-screen bg-darkBlue z-50 fixed  text-white ${loadAnim} `}>
      <div
        className="h-full w-full animate-fadeIn flex items-center justify-center font-syncopate font-bold text-5xl"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="flex items-center animate-pulse transform -translate-x-5">
          <SlideRight className="transform translate-x-8">SPEND</SlideRight>
          <Image className="animate-fadeIn" src={logo} alt="Picture of the author" width={100} height={300} />
          <SlideLeft className="ml-2">COIN</SlideLeft>
        </div>
      </div>
    </div>
  );
}

export default Loader;
