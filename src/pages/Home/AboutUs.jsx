import React from 'react'
import styles from '../../style'

const AboutUs = () => (
   <section className={`${styles.paddingX} my-20 `}>
      <div className={`${styles.paddingX} relative py-20 flex flex-col md:flex-row justify-between bg-lavender`}>
         <div className='absolute top-[-10px] sm:top-[-23px] right-0 h-[10px] sm:h-[23px] w-[80%] bg-yellow' />
         <div className='absolute top-[-10px] sm:top-[-23px] right-0 h-[10px] sm:h-[23px] w-[20%] bg-purple' />
         <div className='flex flex-col items-start flex-1 mr-0 md:mr-20 mb-20 md:mb-0'>
            <p className={`${styles.cap1} mb-5`}>ABOUT US</p>
            <h2 className={`${styles.heading2} mb-5`}>We are a community of content writers who share their learnings</h2>
            <p className={`${styles.body1} mb-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='text-purple font-bold'>Read More {'>'}</p>
         </div>
         <div className='flex flex-col items-start flex-1'>
            <p className={`${styles.cap1} mb-5`}>OUR MISION</p>
            <h3 className={`${styles.heading3} mb-5`}>Creating valuable content for <br /> creatives all around the world</h3>
            <p className={`${styles.body1} mb-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>
      </div>
   </section>
)


export default AboutUs