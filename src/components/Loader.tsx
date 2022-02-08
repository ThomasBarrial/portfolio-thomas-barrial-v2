import React from 'react';
import Image from 'next/image';
import bg from '../../public/bgspendcoin.png';
import logo from '../../public/logo.png';
import SlideUp from './animated/SlideUp';

function Loader({ loadAnim }: { loadAnim: string }): JSX.Element {
  return (
    <div className={`h-screen w-screen bg-darkBlue z-50 fixed  text-white ${loadAnim} `}>
      <div
        className="h-full w-full animate-fadeIn flex items-center justify-center font-syncopate font-bold text-xl"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="flex flex-col items-center animate-pulse transform -translate-x-5">
          <Image className="animate-fadeIn" src={logo} alt="Picture of the author" width={100} height={300} />
          <SlideUp className="mt-10" duration={2}>
            Loading...
          </SlideUp>
        </div>
      </div>
    </div>
  );
}

export default Loader;
