import React from 'react';
import styles from '../../style';

import { three_persons } from '../../assets';
import { authors } from '../../constants';

const WhyWeStarted = () => (
   <section className={`${styles.paddingX} ${styles.paddingY} flex flex-col-reverse justify-between md:flex-row items-center`}>
      <div className='relative flex-1 max-h-[480px]'>
         <img src={three_persons} alt="girls and boy" />
         <div className='absolute bottom-[-37px] left-[20%] sm:left-[110px] w-[74px] h-[74px] bg-purple rounded-full' />
      </div>
      <div className='flex flex-col flex-1 pl-0 md:pl-[64px] mb-[40px] md:mb-0'>
         <h2 className={`${styles.heading2} mb-4`}>Why we started this Blog</h2>
         <h4 className={`${styles.heading4} mb-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
         <p className={`${styles.body1}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
      </div>
   </section>
);

export default WhyWeStarted;