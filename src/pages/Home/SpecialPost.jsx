import React from 'react'
import styles from '../../style'

import { peoples } from '../../assets'
import { Button } from '../../@components'

const SpecialPost = () => (
   <section className={`${styles.paddingX} ${styles.paddingY} overflow-hidden mt-10`}>
      <div style={{ 'backgroundImage': `url(${peoples})` }} className='flex justify-end items-end pt-0 md:pt-[120px] bg-center bg-no-repeat'>
         <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-start max-w-[700px] z-10 bg-[#ffffffcc] md:bg-white`}>
            <p className={`${styles.cap1} mb-5`}>Why we started</p>
            <h2 className={`${styles.heading2} mb-3`}>It started out as a simple idea and evolved into our passion</h2>
            <p className={`${styles.body1} mb-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <Button path="/about" text="Discover our story >" />
         </div>
      </div>
   </section>
)


export default SpecialPost