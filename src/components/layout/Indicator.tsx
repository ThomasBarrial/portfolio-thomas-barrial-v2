import React, { ReactElement, useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../../context/AppContext';

interface IProps {
  data: ISection[];
}
export default function Indicator({ data }: IProps): ReactElement {
  const { state } = useContext(AppContext);
  const variants = {
    open: { scaleX: 1.3, height: '1px', opacity: 1 },
    close: { scaleX: 1, height: '0px', opacity: 0.3 },
  };

  const handleClick = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`hidden w-32 right-5 top-5 lg:left-10 lg:top-44 fixed lg:flex flex-col items-center align-middle text-white justify-around `}>
      {data.map((section, index) => {
        return (
          <button type="button" onClick={() => handleClick(section.id)} className="w-full flex justify-end" key={index}>
            {state.index === index + 1 ? (
              <div className="flex items-center w-5/12 text-xs opacity-50 font-syncopate font-bold text-pink">
                <p className="text-sm">{state.index}</p>/{data.length}
              </div>
            ) : (
              ''
            )}
            <motion.span
              initial="close"
              animate={state.index === index + 1 ? 'open' : 'close'}
              variants={variants}
              className={`border border-pink w-5/12 relative   my-4`}></motion.span>
          </button>
        );
      })}
    </div>
  );
}
