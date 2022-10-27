import React from 'react'
import styles from '../../style'

const ContactHeader = () => (
   <header className={`${styles.flexCenter} sm:pt-16 pt-6`}>
      <div className={`${styles.paddingY} flex flex-col items-center max-w-[768px] px-6 sm:px-0`}>
         <p className={`${styles.cap3} mb-3`}>Contact us</p>
         <h1 className={`${styles.heading1} mb-6 text-center`}>Let’s Start a Conversation</h1>
         <p className={`${styles.body1} text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
   </header>
)


export default ContactHeader