import React from 'react'
import styles from '../../style'

import { man_smile } from '../../assets';
import { socialMedia } from '../../constants'

const AuthorHeader = () => (
   <header className={`${styles.flexCenter} bg-lavender`}>
      <div className={`relative flex flex-col md:flex-row max-w-[1024px] items-center py-16 md:py-32`}>
         <div className='flex flex-row justify-center sm:justify-between pr-0 md:pr-8 mb-6 md:mb-0 px-0 sm:px-6 md:px-0'>
            <img className='min-w-[300px] md:min-w-[250px] h-[200px] md:h-auto pr-0 sm:pr-8 md:pr-0 object-top object-cover' src={man_smile} alt="man smile" />
            <h1 className={`${styles.heading1} mb-6 text-start hidden sm:block md:hidden`}>Hey there, I’m Andrew Jonhson <br /> and welcome to my Blog</h1>
         </div>
         <div className='flex flex-col px-6 md:px-0'>
            <h1 className={`${styles.heading1} mb-6 text-center md:text-start sm:hidden xs:block md:block`}>Hey there, I’m Andrew Jonhson, and welcome to my Blog</h1>
            <p className={`${styles.body1} mb-6`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
            <ul className='flex flex-row'>{
               socialMedia.map((social, index) => (
                  <li key={social.id} className={`${index !== socialMedia.length - 1 ? 'mr-4' : 'mr-0'} brightness-0`}>
                     <a href={social.link}>
                        <img src={social.icon} alt={social.id} />
                     </a>
                  </li>
               ))
            }</ul>
         </div>
         <div className='absolute bottom-0 right-0 h-[10px] sm:h-[23px] w-[100%] bg-yellow' />
         <div className='absolute bottom-0 right-0 h-[10px] sm:h-[23px] w-[25%] bg-purple' />
      </div>
   </header >
)


export default AuthorHeader