import React from 'react'
import styles from '../style'

import { Link } from 'react-router-dom';

const CategoryItem = ({ icon, title, text, path }) => (
   <li className='max-w-[300px] border-[1px] border-[medium-gray]'>
      <Link className='display-block flex flex-col p-8 hover:bg-yellow' to={`/category/${path}`}>
         <div className={`${styles.flexCenter} mb-5  h-[48px] w-[48px] bg-light-yellow rounded-lg`}>
            <img src={icon} alt={title} />
         </div>
         <h3 className={`${styles.heading3} mb-4`}>{title}</h3>
         <p className={`${styles.body1}`}>{text}</p>
      </Link>
   </li>
)

export default CategoryItem