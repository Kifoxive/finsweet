import React from 'react'
import styles from '../../style'

import { man_in_white } from '../../assets'
import Button from '../../@components/Button';

const BlogHeader = () => (
   <section className={`${styles.paddingX} ${styles.paddingY} flex flex-col md:flex-row justify-between items-start md:items-center bg-lavender`}>
      <div className='flex flex-col flex-2 mr-0 md:mr-8 mb-10 md:mb-0'>
         <p className={`${styles.cap1} mb-5`}>Featured Post</p>
         <div className='flex flex-col items-start'>
            <h3 className={`${styles.heading3} mb-4`}>Step-by-step guide to choosing great <br /> font pairs</h3>
            <p className={`${styles.label} mb-3 text-dark-gray`}>By <span className='text-purple'>John Doe</span> <span className='px-2'>|</span> May 23, 2022</p>
            <p className={`${styles.body1} mb-6`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <Button text="Read More >" path="/blog-post" />
         </div>
      </div>
      <div className='flex flex-1 justify-end min-w-[100px] md:min-w-[450px]'>
         <img src={man_in_white} alt="man in white" />
      </div>
   </section>
)


export default BlogHeader