import React, { useEffect } from 'react';

import ContactHeader from './ContactHeader';
import ContactUs from './ContactUs';
import ContactForm from './ContactForm';

const Contact = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <>
         <ContactHeader />
         <ContactUs />
         <ContactForm />
      </>
   );
};

export default Contact;