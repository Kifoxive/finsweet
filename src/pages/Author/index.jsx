import React from "react";

import AuthorHeader from "./AuthorHeader";
import AuthorBlog from "./AuthorBlog";

const Author = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AuthorHeader />
      <AuthorBlog />
    </>
  );
};

export default Author;
