import React from 'react';
import { motion } from 'framer-motion';

interface IProps {
  children: React.ReactNode;
  className?: string;
  duration: number;
}

function SlideLeft({ children, className, duration }: IProps): JSX.Element {
  const variants = {
    open: {
      x: 0,
      transition: { type: 'spring', duration: duration, bounce: 0.1 },
    },
    closed: {
      x: '300px',
      transition: { type: 'spring', duration: duration, bounce: 0.1 },
    },
  };

  return (
    <div className="md:overflow-hidden">
      <motion.div className={className} variants={variants} initial="closed" animate="open">
        {children}
      </motion.div>
    </div>
  );
}

export default SlideLeft;
