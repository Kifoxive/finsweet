import React from 'react'
import styles from '../../style'

import { growth_hands } from '../../assets'

const Team = () => (
   <section className={`${styles.paddingX} ${styles.paddingY} flex flex-col justify-between md:flex-row items-center overflow-hidden`}>
      <div className='flex flex-col max-w-[520px] mb-[40px] md:mb-0'>
         <h2 className={`${styles.heading2} mb-4`}>Our team of creatives</h2>
         <h4 className={`${styles.heading4} mb-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
         <p className={`${styles.body1}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
      </div>
      <div className='relative max-h-[480px]'>
         <img src={growth_hands} alt="hands" />
         <div className='absolute top-[110px] right-[-60px] md:left-[-60px] w-[100px] h-[110px] bg-yellow rounded-tl-[40px]' />
      </div>
   </section>
)


export default Team