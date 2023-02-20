import React, { useEffect } from 'react';

import BlogInnerHeader from './BlogInnerHeader';
import BlogContent from './BlogContent';
import OtherPosts from './OtherPosts';
import { Join } from '../../@components';

const BlogPost = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <>
         <BlogInnerHeader />
         <BlogContent />
         <OtherPosts />
         <Join />
      </>
   );
};

export default BlogPost;