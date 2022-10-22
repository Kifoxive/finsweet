import React from 'react'
import styles from '../../style'

import { overlay, man_in_black } from "../../assets"
import { Button } from '../../@components'

const Hero = () => (
   <section className={`relative flex items-center w-full min-h-[100vh]`}>
      <div style={{ 'backgroundImage': `url(${overlay})` }} className={`absolute h-[100%] w-[100%] z-20 bg-no-repeat bg-cover bg-center`} />
      <div style={{ 'backgroundImage': `url(${man_in_black})` }} className={`absolute h-[100%] w-[100%] bg-no-repeat bg-cover bg-center`} />
      <div className={``}></div>
      <div className={`${styles.paddingX} z-20 pb-[150px]`}>
         <p className={`${styles.cap4} mb-5 mt-5 md:mt-0 text-[#fff]`}>posted on <b className={`${styles.cap3}  text-[#fff]`}>startup</b></p>
         <h2 className={`${styles.display} mb-5  text-[#fff]`}>Step-by-step guide to choosing <br /> great font pairs</h2>
         <p className={`${styles.body1} mb-2 text-white`}>By <span className='text-yellow'>James West</span> <span className='px-2'>|</span> May 23, 2022</p>
         <p className={`${styles.body1} mb-5 font-bold  text-white`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
         <Button text="Read More >" path="/blog-post" />
      </div>
   </section>
)


export default Hero

//style={{ 'var(--image-url)': '/' }} 
//bg-[image:var(--image-url)]