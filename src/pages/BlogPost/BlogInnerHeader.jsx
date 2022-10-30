import React from 'react'
import styles from '../../style'

import { profile_pic, rocket, woman_eyeglasses, two_woman, people_handshake, woman_looking } from '../../assets'

const BlogInnerHeader = () => (
   <header className={`${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} flex flex-col`}>
      <div className='flex-col justify-start'>
         <div className='flex flex-row'>
            <img className='h-[48px] w-[48px] mr-[15px]' src={profile_pic} alt="profile pic" />
            <div>
               <h3 className={`${styles.heading3} text-purple`}>Andrew Jonson</h3>
               <p className={`${styles.body1}`}>Posted on 27th January 2022</p>
            </div>
         </div>
         <div className='mt-[24px] mb-[34px]'>
            <h1 className={`${styles.heading1}`}>Step-by-step guide to choosing <br className="sm:block hidden" /> great font pairs</h1>
         </div>
         <div className='flex flex-row'>
            <img src={rocket} alt="rocket" />
            <h4 className={`${styles.heading4} ml-2`}>Startup</h4>
         </div>
      </div>
      <img className='mt-[64px]' src={woman_eyeglasses} alt="woman and team" />
   </header>
)


export default BlogInnerHeader