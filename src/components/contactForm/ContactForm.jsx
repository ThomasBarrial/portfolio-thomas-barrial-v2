import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useisContactFromStore } from '../store/isContactContext.slice';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Footer from './components/Footer';
import close from '../../../public/icons/close.svg';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ContactForm() {
  const { dispatchIsContact } = useisContactFromStore();
  const [formStatus, setFormStatus] = useState('');
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [Message, setMessage] = useState();
  const [isRequired, setIsRequired] = useState(false);
  const form = useRef();

  const variants = {
    open: {
      x: 0,
      transition: { type: 'spring', duration: 1.8, bounce: 0.1 },
    },
    closed: {
      x: '300px',
      transition: { type: 'spring', duration: 1.8, bounce: 0.1 },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === undefined || mail === undefined || Message === undefined) {
      setIsRequired(true);
    } else {
      setFormStatus('isLoading');
      emailjs.sendForm('service_2cismda', 'template_chqhy8d', form.current, 'user_9SOJvI2IuSezFOCNpXog0').then(
        (result) => {
          setFormStatus(result.text);
        },
        (error) => {
          setFormStatus(error.text);
        },
      );
    }
  };
  return (
    <div className="h-screen w-screen text-white flex justify-end fixed z-50">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        onClick={() => dispatchIsContact()}
        className="h-screen w-screen absolute z-10 animate-fadeFast  bg-darkBlue bg-opacity-70"
      />
      <motion.div
        variants={variants}
        initial="closed"
        animate="open"
        closed="closed"
        className="bg-darkBlue  h-screen p-5 lg:p-10 z-20 w-full lg:w-1/3 shadow-contactForm">
        <Header close={close} />

        <form className="w-full  flex flex-col" ref={form} onSubmit={sendEmail}>
          {formStatus === 'isLoading' || formStatus === 'OK' ? (
            ''
          ) : (
            <Inputs isRequired={isRequired} setName={setName} setMail={setMail} setMessage={setMessage} />
          )}
          {formStatus === 'isLoading' ? (
            <p className="text-pink mt-8 text-bold animate-pulse w-full flex justify-center">Loading ...</p>
          ) : (
            <Footer formStatus={formStatus} />
          )}
        </form>
      </motion.div>
    </div>
  );
}

export default ContactForm;
