import React from 'react'
import styles from '../style'

const PostItem = ({ category, title, text, photo, imgSize = 'big' }) => {
   return (
      <li className='flex flex-col md:flex-row'>
         <div className='flex justify-center sm:justify-start'>
            <img className={`${imgSize === 'small' ? 'sm:max-w-[300px] object-cover' : 'sm:max-w-[400px]'} max-w-[100%]`} src={photo} alt={category} />
         </div>
         <div className='flex flex-col justify-evenly px-0 md:px-8 py-8'>
            <p className={`${styles.cap1} text-purple mb-3`}>{category}</p>
            <h2 className={`${styles.heading2} mb-3`}>{title}</h2>
            <p className={`${styles.body1}`}>{text}</p>
         </div>
      </li>
   )
}

export default PostItem
