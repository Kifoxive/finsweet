import React from 'react'
import styles from '../../style'

import { PostItem } from '../../@components'
import { myPosts } from '../../constants'

const AuthorBlog = () => (
   <section className={`${styles.flexCenter} py-16 md:py-32`}>
      <div className='flex flex-col max-w-[1024px]'>
         <div className='px-6'>
            <h2 className={`${styles.heading2} mb-10 md:mb-16`}>My Posts</h2>
         </div>
         <ul className='flex flex-col gap-16 px-6 md:px-0'>{
            myPosts.map((blog) => <PostItem key={blog.id} {...blog} imgSize='medium' />)
         }</ul>
      </div>
   </section>
)

export default AuthorBlog