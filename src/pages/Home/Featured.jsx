import React from 'react';
import styles from '../../style';

import { white_concrete_building } from '../../assets';
import Button from '../../@components/Button';
import { Link } from 'react-router-dom';

const Post = () => (
   <div className={`p-[25px] flex flex-col hover:bg-light-yellow min-w-[300px] sm:min-w-[400px] cursor-pointer`}>
      <p className={`${styles.label} mb-3 text-dark-gray`}>By <span className='text-purple'>John Doe</span> <span className='px-2'>|</span> May 23, 2022</p>
      <h4 className={`${styles.heading4}`}>8 Figma design systems that <br className="sm:block hidden" /> you can download for free <br className="sm:block hidden" /> today.</h4>
   </div>
);

const Featured = () => {
   const posts = [];

   for (let i = 0; i < 4; i++) {
      posts.push(<Post key={i} />);
   }

   return (
      <section className={`${styles.paddingX} ${styles.paddingY} flex flex-col md:flex-row justify-between w-full mt-[40px]`}>
         <div className='flex flex-col flex-2 mr-0 md:mr-8'>
            <h2 className={`${styles.heading2} text-black mb-6 `}>Featured Post</h2>
            <div className='flex flex-col items-start p-8 border-[1px] border-[medium-gray]'>
               <img className='mb-6 w-full' src={white_concrete_building} alt="building" />
               <p className={`${styles.label} mb-3 text-dark-gray`}>By <span className='text-purple'>John Doe</span> <span className='px-2'>|</span> May 23, 2022</p>
               <h3 className={`${styles.heading3} mb-4`}>Lorem ipsum dolor sit amet, consectetur adipiscing <br className="sm:block hidden" /> elit, sed do eiusmod tempor.</h3>
               <p className={`${styles.body1} mb-6`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <br className="sm:block hidden" /> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
               <Button text="Read More >" />
            </div>
         </div>
         <div className='flex flex-col flex-1 mt-10 md:mt-0'>
            <div className='flex flex-row justify-between items-center'>
               <h2 className={`${styles.heading2} text-black`}>All Posts</h2>
               <p className={`${styles.body1} text-purple min-w-[100px] text-end`}><Link to="/blog">View All</Link></p>
            </div>
            <div className='flex flex-wrap md:flex-nowrap flex-row md:flex-col justify-center sm:justify-start'>
               {posts}
            </div>
         </div>
      </section>
   );
};

export default Featured;
