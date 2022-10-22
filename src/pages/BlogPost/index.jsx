import React from 'react'

import BlogInnerHeader from './BlogInnerHeader'
import BlogContent from './BlogContent'
import OtherPosts from './OtherPosts'
import { Join } from '../../@components'

const BlogPost = () => {
   return (
      <>
         <BlogInnerHeader />
         <BlogContent />
         <OtherPosts />
         <Join />
      </>
   )
}

export default BlogPost