import React from "react"

import BlogHeader from "./BlogHeader"
import Blogs from "./Blogs"
import Categories from "./Categories"
import { Join } from '../../@components'

const Blog = () => {
  return (
    <>
      <BlogHeader />
      <Blogs />
      <Categories />
      <Join />
    </>
  )
}

export default Blog
