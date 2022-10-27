import React from 'react'
import styles from '../../style'

import { Navigate, useParams } from 'react-router-dom'
import { PostItem } from '../../@components';
import { posts, categories, tags, categoriesNames } from '../../constants'
import { TagsCouple, CategoryButton } from './categoryComponents'

function getTagsCouples(tags) {
   const tagsCouple = []

   for (let i = 0; i < tags.length; i += 2) {
      const couple = []
      couple.push(tags[i])
      if (tags[i + 1] !== undefined) {
         couple.push(tags[i + 1])
      }
      tagsCouple.push(couple)
   }

   return tagsCouple
}

const Sections = () => {
   const { selectedCategory = 'startup' } = useParams()
   const tagsCouple = getTagsCouples(tags)


   if (!categoriesNames.includes(selectedCategory)) {
      return <Navigate to="/NoPage" />
   }

   return (
      <section className={`${styles.paddingX} sm:py-32 py-16 flex flex-col md:flex-row justify-between`}>
         <ul className='flex flex-col gap-8'>
            {posts[selectedCategory].map((blog) => <PostItem key={blog.id} {...blog} imgSize="small" />)}
         </ul>
         <div className='flex flex-col ml-0 md:ml-[100px] max-w-[300px]'>
            <div className='flex flex-col mb-12'>
               <h2 className={`${styles.heading2} mb-10`}>Categories</h2>
               <ul className='flex flex-col gap-6'>{
                  categories.map((elem) => <CategoryButton key={elem.id} {...elem} isSelected={selectedCategory === elem.path} />)
               }</ul>
            </div>
            <div className='flex flex-col'>
               <h2 className={`${styles.heading2} mb-6`}>All Tags</h2>
               <ul className='flex flex-col gap-4'>{
                  tagsCouple.map((couple, index) => <TagsCouple key={index} couple={couple} />)
               }</ul>
            </div>
         </div>
      </section >
   )
}

export default Sections