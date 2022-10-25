import React from 'react'
import styles from '../../style'

import { Link, useParams } from 'react-router-dom'
import { PostItem } from '../../@components';
import { blogs, categories, tags } from '../../constants';

const Tag = ({ text }) => (
   <li className='text-center hover:opacity-80 cursor-pointer'>
      <p className='py-2 px-6 rounded-[28px] border-[2px] border-medium-gray font-sen font-bold text-medium-gray'>{text}</p>
   </li>
)

const CategoryButton = ({ icon, title, path }) => (
   <li className='max-w-[300px] border-[1px] border-[medium-gray]'>
      <Link className='display-block flex flex-row items-center p-6 hover:bg-yellow' to={`/category/${path}`}>
         <div className={`${styles.flexCenter} min-h-[48px] min-w-[48px] bg-light-yellow rounded-lg`}>
            <img src={icon} alt={title} />
         </div>
         <h3 className={`${styles.heading3} ml-4`}>{title}</h3>
      </Link>
   </li>
)

const Sections = () => {
   const { selectedCategory = 'startup' } = useParams()

   return (
      <section className={`${styles.paddingX} sm:py-32 py-16 flex flex-col md:flex-row justify-between`}>
         <div className='flex flex-col gap-8'>
            {blogs[selectedCategory].map((blog) => <PostItem key={blog.id} {...blog} imgSize="small" />)}
         </div>
         <div className='flex flex-col ml-0 md:ml-[100px] max-w-[300px]'>
            <div className='flex flex-col mb-12'>
               <h2 className={`${styles.heading2} mb-10`}>Categories</h2>
               <ul className='flex flex-col gap-6'>{
                  categories.map((elem) => <CategoryButton key={elem.id} {...elem} />)
               }</ul>
            </div>
            <div className='flex flex-col'>
               <h2 className={`${styles.heading2} mb-6`}>All Tags</h2>
               <ul className='flex flex-row flex-wrap gap-4'>{
                  tags.map((tag) => <Tag key={tag.id} {...tag} />)
               }</ul>
            </div>
         </div>
      </section >
   )
}

export default Sections