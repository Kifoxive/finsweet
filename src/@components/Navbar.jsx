import React from 'react';
import styles from '../style';

import { Link } from 'react-router-dom';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';
// import debounce from 'lodash.debounce';

const Navbar = () => {
   const [toggleMenu, setToggleMenu] = React.useState(false);

   const [y, setY] = React.useState(window.scrollY);
   const [isScrollingDown, setIsScrollingDown] = React.useState(false);

   const handleNavigation = React.useCallback(
      e => {
         const window = e.currentTarget;
         if (y > window.scrollY) {
            setIsScrollingDown(false);
         } else if (y < window.scrollY) {
            setIsScrollingDown(true);
         }
         setY(window.scrollY);
      }, [y]
   );

   React.useEffect(() => {
      setY(window.scrollY);
      window.addEventListener("scroll", handleNavigation);

      return () => {
         window.removeEventListener("scroll", handleNavigation);
      };
   }, [handleNavigation]);
   ;

   return (
      <nav className={`${styles.paddingX} ${isScrollingDown ? 'opacity-90' : 'opacity-100'} delay-200 flex flex-row justify-between items-center navbar h-[80px] bg-black`}>
         <div><img src={logo} alt="logo" className='w-[140px]' /></div>
         <div className={`sm:flex flex-row items-center hidden`}>
            <ul className='flex flex-row'>
               {navLinks.map((link) => (
                  <li className={`${styles.body1} ${link.id === "privacy_policy" && "hidden"} mr-[24px] text-[#fff] hover:text-yellow`} key={link.id}><Link to={link.path}>{link.title}</Link>
                  </li>
               ))}
            </ul>
            <button className='text-black py-[16px] px-[48px] bg-light-gray font-semibold hover:brightness-[90%]'>Subscribe</button>
         </div>
         <div className='sm:hidden'><img src={toggleMenu ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggleMenu((prev) => !prev)} /></div>

         <div className={`${toggleMenu ? 'flex' : 'hidden'} absolute items-center top-[70px] right-0 sm:hidden px-4 sidebar rounded-xl bg-black`}>
            <div className={`sm:flex flex-row`}>
               <ul className='flex flex-col'>
                  {navLinks.map((link, index) => (
                     <li className={`${link.id === "privacy_policy" && "hidden"} mb-2 mt-2 ${styles.body1} text-[#fff] hover:text-yellow`} key={link.id}><Link onClick={() => {
                        setToggleMenu(false);
                     }} to={link.path}>{link.title}</Link>
                     </li>
                  ))}
               </ul>
               <button className={`py-[5px] px-[30px] bg-light-gray font-semibold mb-2 text-black hover:brightness-[90%]`}>Subscribe</button>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;