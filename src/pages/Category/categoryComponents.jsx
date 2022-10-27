import React from 'react'
import styles from '../../style'

import { Link } from 'react-router-dom'

export const TagsCouple = ({ couple }) => (
   <li className='flex flex-row gap-4'>{
      couple.map((tag) => <Tag key={tag.id} {...tag} />)
   }</li>
)

export const Tag = ({ text }) => (
   <div style={{ 'flexBasis': `${text.length * 8}%` }} className={`relative max-w-[252px] py-2 px-6 overflow-hidden text-center opacity-70 hover:opacity-100 cursor-pointer rounded-[28px] border-[2px] border-medium-gray`}>
      <span className='font-sen font-bold text-medium-gray'>
         {text}
      </span>
      <p className='absolute right-0 h-[100%] top-0 w-6 bg-gradient-to-r from-[#fff2] via-[#fffffff2] to-white' />
   </div>
)

export const CategoryButton = ({ icon, title, path, isSelected }) => (
   <li className={`${isSelected ? 'border-l-[2px] border-l-yellow' : ''} max-w-[300px] border-[1px] border-[medium-gray]`}>
      <Link className='display-block flex flex-row items-center p-6 hover:bg-yellow' to={`/category/${path}`}>
         <div className={`${styles.flexCenter} min-h-[48px] min-w-[48px] bg-light-yellow rounded-lg`}>
            <img src={icon} alt={title} />
         </div>
         <h3 className={`${styles.heading3} ml-4`}>{title}</h3>
      </Link>
   </li>
)