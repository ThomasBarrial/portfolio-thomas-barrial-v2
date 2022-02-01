import React, { useState } from 'react';
import Image from 'next/dist/client/image';

function Backtop(): JSX.Element {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  if (typeof window !== 'undefined') {
    // browser code
    window.addEventListener('scroll', toggleVisible);
  }

  return (
    <button type="button" onClick={() => scrollToTop()} className="flex items-center fixed bottom-8 text-pink right-44 lg:right-56">
      {visible && <p className="hidden animate-fadeIn lg:flex">Haut de page</p>}
      <div className={`ml-2  ${visible ? `transform duration-700 rotate-0 mt-2` : `hidden`}`}>
        <Image src={'/icons/arrow.svg'} height={20} width={20} alt="" />
      </div>
    </button>
  );
}

export default Backtop;
