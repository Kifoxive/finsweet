import React, { useEffect } from 'react';

import BlogHeader from "./BlogHeader";
import Blogs from "./Blogs";
import Categories from "./Categories";
import { Join } from '../../@components';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BlogHeader />
      <Blogs />
      <Categories />
      <Join />
    </>
  );
};

export default Blog;
