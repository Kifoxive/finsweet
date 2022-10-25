import React from 'react'
import styles from '../../style'

import { selectedBlogs } from '../../constants'
import { PostItem } from '../../@components';

const Blogs = () => {
   const [dirIsRight, setDirIsRight] = React.useState(true)
   return (
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
         <div className='border-b-[1px] border-[medium-gray] p-8'>
            <h1 className={`${styles.heading1}`}>All posts</h1>
         </div>
         <ul className='flex flex-col gap-[30px] md:gap-16 my-[64px]'>
            {selectedBlogs.map((blog) => <PostItem key={blog.id} {...blog} />)}
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