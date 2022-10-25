import React from 'react'
import styles from '../../style'

const CategoryHero = () => (
   <header className={`${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} bg-lavender`}>
      <div className='flex flex-col items-center'>
         <p className={`${styles.display} mb-4 text-center`}>Business</p>
         <p className={`${styles.body1} mb-8 text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
         <p className={`${styles.cap4}`}>Blog {'>'} Business</p>
      </div>
   </header>
)


export default CategoryHero