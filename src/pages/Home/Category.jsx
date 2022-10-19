import React from 'react'
import styles from '../../style'

import { catagories } from '../../constants'

const CategoryItem = ({ icon, title, text }) => (
   <li className='max-w-[300px] p-8 border-[1px] border-[medium-gray] hover:bg-yellow'>
      <div className={`${styles.flexCenter} mb-5  h-[48px] w-[48px] bg-light-yellow rounded-lg`}>
         <img src={icon} alt={title} />
      </div>
      <h3 className={`${styles.heading3} mb-4`}>{title}</h3>
      <p className={`${styles.body1} text-medium-gray`}>{text}</p>
   </li>
)

const Category = () => {
   return (
      <div className={`${styles.paddingX}`}>
         <div className={`${styles.paddingY}`}>
            <h2 className={`${styles.heading2} text-center`}>Choose A Catagory</h2>
         </div>
         <ul className='flex flex-wrap md:flex-nowrap flex-row justify-center md:justify-between gap-5'>{
            catagories.map((elem) => <CategoryItem key={elem.id} {...elem} />)}
         </ul>
      </div >
   )
}

export default Category