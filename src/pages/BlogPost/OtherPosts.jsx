import React from 'react'
import styles from '../../style'

import { whatToRead } from '../../constants'

const Post = ({ author, date, title, text, photo }) => (
   <div className='flex flex-col'>
      <img className='py-[8px] sm:py-[16px]' src={photo} alt="poster" />
      <p className={`${styles.label} mb-3 text-dark-gray py-[8px] sm:py-[16px]`}>By <span className='text-purple'>{author}</span> <span className='px-2'>|</span> {date}</p>
      <h3 className={`${styles.heading3}`}>{title}</h3>
      <p className={`${styles.body1} py-[8px] sm:py-[16px]`}>{text}</p>
   </div>
)

const OtherPosts = () => {
   return (
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
         <div className='border-b-[1px] border-[medium-gray] pb-[48px]'>
            <div className='py-[20px] md:py-[64px]'>
               <h2 className={`${styles.heading2}`}>What to read next</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-8'>
               {whatToRead.map((post) => <Post key={post.id} {...post} />)}
            </div>
         </div>
      </section>
   )
}

export default OtherPosts