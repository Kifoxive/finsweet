import React from 'react'
import styles from '../../style'

import { useParams } from 'react-router-dom'

const CategoryHero = () => {
   const { selectedCategory = 'startup' } = useParams()

   return (
      <header className={`${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} bg-lavender`}>
         <div className='flex flex-col items-center'>
            <p style={{ 'textTransform': 'capitalize' }} className={`${styles.display} mb-4 text-center`}>{selectedCategory}</p>
            <p className={`${styles.body1} mb-8 text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className="sm:block hidden" /> eiusmod tempor incididunt ut labore.</p>
            <p className={`${styles.cap4}`}>Blog {'>'} {selectedCategory}</p>
         </div>
      </header>
   )
}


export default CategoryHero