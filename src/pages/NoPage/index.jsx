import React, { useEffect } from 'react';

import Main from './Main';

const NoPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <>
         <Main />
      </>
   );
};

export default NoPage;