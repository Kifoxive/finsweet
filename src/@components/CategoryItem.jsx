import React from 'react'
import styles from '../style'

const CategoryItem = ({ icon, title, text }) => (
   <li className='max-w-[300px] p-8 border-[1px] border-[medium-gray] hover:bg-yellow'>
      <div className={`${styles.flexCenter} mb-5  h-[48px] w-[48px] bg-light-yellow rounded-lg`}>
         <img src={icon} alt={title} />
      </div>
      <h3 className={`${styles.heading3} mb-4`}>{title}</h3>
      <p className={`${styles.body1}`}>{text}</p>
   </li>
)

export default CategoryItem