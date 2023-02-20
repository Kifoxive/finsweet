import React, { useEffect } from 'react';

import CategoryHero from './CategoryHero';
import Sections from './Sections';

const Category = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <>
         <CategoryHero />
         <Sections />
      </>
   );
};

export default Category;