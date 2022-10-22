import React from 'react'
import styles from '../../style'

import { blogText } from '../../constants'

const BlogContent = () => {
   return (
      <section className={`${styles.flexCenter} ${styles.paddingX} py-[10px]`}>
         <div className='flex flex-col justify-start max-w-[1164px]'>
            <div className='pb-[20px]'>
               <h2 className={`${styles.heading2} my-[16px]`}>{blogText.title}</h2>
               <p className={`${styles.body1} my-[16px]`}>{blogText.text}</p>
            </div>
            <div className='pb-[20px]'>
               <h2 className={`${styles.heading2} my-[16px]`}>{blogText.title}</h2>
               <p className={`${styles.body1} my-[16px]`}>{blogText.text}</p>
               <p className={`${styles.body1} my-[16px]`}>{blogText.text}</p>
               <ul>
                  {blogText.list.map((item) => (
                     <li className={`${styles.heading4}`} key={item.id}>
                        {item.text}
                     </li>
                  ))}
               </ul>
               <p className={`${styles.body1} my-[16px]`}>{blogText.text}</p>
            </div>
            <div>
               <h2 className={`${styles.heading2} my-[16px]`}>{blogText.title}</h2>
               <p className={`${styles.body1} my-[16px]`}>{blogText.text}</p>
            </div>
         </div>
      </section>
   )
}

export default BlogContent