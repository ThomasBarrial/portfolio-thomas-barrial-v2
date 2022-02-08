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
    <div className="hidden w-32 right-5 top-5 lg:right-20 lg:top-32 fixed lg:flex flex-col items-center align-middle text-blue justify-around ">
      {data.map((section, index) => (
        <button type="button" onClick={() => handleClick(section.id)} className="w-full flex justify-start items-center" key={section.id}>
          <motion.span
            initial="close"
            animate={state.index === index + 1 ? 'open' : 'close'}
            variants={variants}
            className="border border-blue w-3/12 relative my-4"
          />
          <p className={`text-xs font-syncopate ml-5 ${state.index === index + 1 && 'font-bold'}`}>{section.id}</p>
        </button>
      ))}
    </div>
  );
}
