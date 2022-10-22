import React from 'react'
import styles from '../../style'

import { catagories } from '../../constants'
import { CategoryItem } from '../../@components'

const Category = () => (
   <section className={`${styles.paddingX}`}>
      <div className='py-[48px]'>
         <h2 className={`${styles.heading2} text-center`}>Choose A Catagory</h2>
      </div>
      <ul className='flex flex-wrap md:flex-nowrap flex-row justify-center md:justify-between gap-[32px]'>{
         catagories.map((elem) => <CategoryItem key={elem.id} {...elem} />)}
      </ul>
   </section >
)


export default Category