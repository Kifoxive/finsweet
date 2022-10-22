import React from 'react'
import styles from '../../style'

import { blogsCards } from '../../constants'

const Blog = ({ category, title, text, photo }) => {
   return (
      <li className='flex flex-col md:flex-row'>
         <div className='flex justify-center sm:justify-start'>
            <img className='max-w-[100%] sm:max-w-[400px]' src={photo} alt={category} />
         </div>
         <div className='flex flex-col justify-evenly px-0 md:px-8 py-8'>
            <p className={`${styles.cap1} text-purple mb-3`}>{category}</p>
            <h2 className={`${styles.heading2} mb-3`}>{title}</h2>
            <p className={`${styles.body1}`}>{text}</p>
         </div>
      </li>
   )
}

const Blogs = () => {
   const [dirIsRight, setDirIsRight] = React.useState(true)
   return (
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
         <div className='border-b-[1px] border-[medium-gray] p-8'>
            <h2 className={`${styles.heading1}`}>All posts</h2>
         </div>
         <ul className='flex flex-col gap-[30px] md:gap-[64px] my-[66px]'>
            {blogsCards.map((blog) => <Blog key={blog.id} {...blog} />)}
         </ul>
         <div className='flex justify-center'>
            <div className='flex flex-row justify-between items-baseline'>
               <button className={`${dirIsRight ? `${styles.heading4} text-medium-gray` : styles.heading3} w-[100px]`} onClick={() => setDirIsRight(false)}>{'<'} Prev</button>
               <button className={`${dirIsRight ? styles.heading3 : `${styles.heading4} text-medium-gray`} w-[100px]`} onClick={() => setDirIsRight(true)}>Next {'>'}</button>
            </div>
         </div>
      </section>
   )
}

export default Blogs