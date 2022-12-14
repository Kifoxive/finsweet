import React from 'react'
import styles from '../../style'

import { profile_pic, prev_button, next_button } from '../../assets'

const Testimonials = () => (
   <section className={`sm:px-16 px-0 ${styles.paddingY}`}>
      <div className={`sm:px-20 px-6 flex flex-col md:flex-row justify-between py-[20px] sm:py-[80px]  bg-light-yellow`}>
         <div className='flex flex-col justify-between h-[200px] w-auto xs:w-[350px] mr-0 md:mr-20 mb-[40px] md:mb-0 sm:mb-[100px] '>
            <p className={`${styles.cap1} mb-5`}>TESTIMONIALS</p>
            <h2 className={`${styles.heading2} mb-5`}>What people say <br className="sm:block hidden" /> about our blog</h2>
            <p className={`${styles.body1} mb-5`}>Lorem ipsum dolor sit amet, consectetur <br className="xs:block hidden" /> adipiscing elit, sed do eiusmod tempor.</p>
         </div>
         <div className={`${styles.paddingX} flex flex-1 flex-col ml-0 md:ml-[40px] border-l-[1px] border-gray-300`}>
            <h4 className={`${styles.heading4}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            <div className='flex flex-col flex-wrap md:flex-row mt-[100px] justify-between items-start md:items-center'>
               <div className='flex flex-row'>
                  <img className='h-[48px] w-[48px] mr-[15px]' src={profile_pic} alt="profile pic" />
                  <div>
                     <h4 className={`${styles.heading4}`}>Jonathan Vallem</h4>
                     <p className={`${styles.body1}`}>New york, USA</p>
                  </div>
               </div>
               <div className='flex flex-row items-center p-[20px]'>
                  <img className='h-[48px] w-[48px] mr-[15px]' src={prev_button} alt="prev button" />
                  <img className='h-[62px] w-[62px] pt-[5px]' src={next_button} alt="next button" />
               </div>
            </div>
         </div>
      </div>
   </section>
)


export default Testimonials