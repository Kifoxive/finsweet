import React from 'react'
import styles from '../style'

import { Link } from 'react-router-dom';
import { logo } from '../assets'
import { navLinks, socialMedia } from '../constants';
import { Button } from '../@components'

const Footer = () => {
   return (
      <footer className={`${styles.paddingX} flex flex-col  bg-black`}>
         <div className='flex flex-col sm:flex-row justify-evenly sm:justify-between items-start sm:items-center h-[120px] my-20 xs:my-0'>
            <div><img src={logo} alt="logo" className='w-[140px]' /></div>
            <ul className='flex flex-wrap flex-col xs:flex-row'>
               {navLinks.map((link) => (
                  <li className={`${styles.body1} mr-[24px] text-[#fff] hover:text-yellow hover:underline mt-2 xs:mt-0`} key={link.id}><Link to={link.path}>{link.title}</Link>
                  </li>
               ))}
            </ul>
         </div>

         <div className={`${styles.paddingX} py-[64px] flex flex-col md:flex-row wrap items-baseline justife-between bg-[#2f303f]`}>
            <h2 className={`${styles.heading2} text-[#fff] mr-5 md:mb-0 mb-10`}>Subscribe to our news letter to get <br className="sm:block hidden" /> latest updates and news</h2>
            <div className={`flex flex-col xs:flex-row items-start`}>
               <input type="text" placeholder='Enter Your Email' className={`${styles.body1} max-w-[500px] sm:max-w-[320px] xs:max-w-[200px] flex-shrink-2 py-[14px] px-[25px] bg-transparent border-[1px] border-medium-gray mb-5 xs:mb-0 mr-5 text-[#fff]`} />

               <Button text="Subscribe" />
            </div>
         </div>

         <div className='flex flex-row items-center h-[140px]'>
            <div className='flex flex-col md:flex-row w-full justify-between'>
               <div className='flex flex-col'>
                  <p className={`${styles.body1}`}>Finstreet 118 2561 Fintown</p>
                  <p className={`${styles.body1}`}>Hello@finsweet.com  020 7993 2905</p>
               </div>
               <ul className='flex flex-row md:mt-0 mt-5'>{socialMedia.map((social, index) => (
                  <li key={social.id} className={`${index !== socialMedia.length - 1 ? 'mr-5' : 'mr-0'}`}><a href={social.link}><img src={social.icon} alt={social.id} /></a></li>
               ))}</ul>
            </div>
         </div>
      </footer>
   )
}

export default Footer