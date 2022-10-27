import React from 'react'
import styles from '../../style'


const ContactUs = () => (
   <section className={`${styles.flexCenter} flex`}>
      <div className={`${styles.padding} flex-1 flex flex-col xs:flex-row items-stretch max-w-[768px] gap-11 bg-purple`}>
         <div className='flex-1'>
            <div className='border-b-[1px] border-b-medium-gray mb-4'>
               <p className={`${styles.body2} text-white opacity-50 mb-4`}>Working hours</p>
            </div>
            <h5 className={`${styles.heading5} text-white`}>Monday To Friday</h5>
            <h5 className={`${styles.heading5} text-white`}>9:00 AM to 8:00 PM </h5>
            <p className={`${styles.body1} text-white opacity-50`}>Our Support Team is available 24/7</p>
         </div>
         <div className='flex-1'>
            <div className='border-b-[1px] border-b-medium-gray mb-4'>
               <p className={`${styles.body2} text-white opacity-50 mb-4`}>Contact Us</p>
            </div>
            <h5 className={`${styles.heading5} text-white`}>020 7993 2905</h5>
            <p className={`${styles.body1} text-white opacity-50`}>hello@finsweet.com</p>
         </div>
      </div>
   </section>
)

export default ContactUs