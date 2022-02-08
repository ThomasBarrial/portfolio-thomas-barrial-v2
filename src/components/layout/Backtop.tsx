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
    <button type="button" onClick={() => scrollToTop()} className="flex items-center fixed bottom-8 text-blue right-44 lg:left-56">
      <div className={`mr-2  ${visible ? 'transform duration-700 rotate-0 mt-2' : 'transform duration-700 rotate-180'}`}>
        <Image src="/icons/arrow.svg" height={20} width={20} alt="" />
      </div>
      {visible && <p className="hidden animate-fadeIn lg:flex">back to the top</p>}
    </button>
  );
}

export default Backtop;
