import React from 'react'
import styles from '../../style'

import { peoples } from '../../assets'
import { statistic } from '../../constants'

const Mision = () => (
   <section className={`${styles.paddingX} flex flex-col mt-[70px] md:mt-[-60px]`}>
      <div style={{ 'backgroundImage': `url(${peoples})` }} className='relative flex items-end w-full h-[444px] bg-cover bg-center'>
         <ul className={`flex flex-col sm:flex-row ml-0 sm:ml-[110px] mb-[10px] md:mb-[23px] py-8 px-12 bg-[#ffd500cc] sm:bg-yellow gap-[30px] sm:gap-[68px]`}>
            {statistic.map((item, index) => (
               <li key={item.id}>
                  <p className={`${styles.display}`}>{item.amount}</p>
                  <p className={`${styles.body1} text-[#232536]`}>{item.text}</p>
               </li>
            ))}
         </ul>
         <div className='absolute sm:bottom-0 left-[10%] sm:left-[110px] h-[10px] sm:h-[23px] w-[70%] bg-yellow' />
         <div className='absolute sm:bottom-0 left-[10%] sm:left-[110px] h-[10px] sm:h-[23px] w-[25%] bg-purple' />
      </div>

      <div className={`${styles.paddingX} relative py-20 flex flex-col md:flex-row justify-between bg-lavender`}>
         <div className='flex flex-col items-start flex-1 mr-0 md:mr-20 mb-20 md:mb-0'>
            <p className={`${styles.cap1} mb-5`}>Our mision</p>
            <h3 className={`${styles.heading3} mb-5`}>Creating valuable content for creatives all around the world</h3>
            <p className={`${styles.body1} mb-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
         </div>
         <div className='flex flex-col items-start flex-1'>
            <p className={`${styles.cap1} mb-5`}>Our vision</p>
            <h3 className={`${styles.heading3} mb-5`}>A platform that empowers individuals to improve</h3>
            <p className={`${styles.body1} mb-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
         </div>
      </div>
   </section>
)

export default Mision