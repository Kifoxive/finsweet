import React from 'react'
import styles from '../../style'

const AboutUsHeader = () => {
   return (
      <section className={`${styles.paddingX} sm:pt-16 pt-6 flex flex-col md:flex-row wrap justify-between items-center`}>
         <div className={`${styles.paddingY} flex-1 ml-0 md:ml-[110px] sm:px-16 px-0 bg-white z-20`}>
            <p className={`${styles.cap4} pb-3`}>ABOUT US</p>
            <h1 className={`${styles.heading1}`}>We are a team of content writers who share their learnings</h1>
         </div>
         <div className={`${styles.body1} flex-1 md:px-[40px] bg-white z-20`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </section>
   )
}

export default AboutUsHeader