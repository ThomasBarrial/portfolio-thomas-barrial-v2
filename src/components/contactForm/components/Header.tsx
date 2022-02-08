import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useisContactFromStore } from '../../store/isContactContext.slice';

function Header({ close }: { close: string }): JSX.Element {
  const { dispatchIsContact } = useisContactFromStore();
  return (
    <div>
      {' '}
      <div className="w-full flex justify-between items-center">
        <div className="font-bold text-3xl lg:text-3xl lg:mt-5 mb-0 my-5">Nous Contacter</div>
        <motion.button animate={{ rotate: -90 }} transition={{ duration: 1 }} onClick={() => dispatchIsContact()}>
          <Image src={close} height={20} width={20} alt="close" />
        </motion.button>
      </div>
      <div className="text-sm mt-2">
        Pour toute demande professionnelle veuillez remplir les champs ci-dessous et notre équipe vous répondra dès que possible
      </div>
    </div>
  );
}

export default Header;
