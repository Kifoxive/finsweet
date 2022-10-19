import React from 'react'
import styles from '../../style'

import { authors } from '../../constants'

const Author = ({ icon, name, job, socialMedia }) => (
   <li className='flex flex-col items-center min-w-[300px] p-8  bg-light-gray hover:bg-light-yellow'>
      <div className={`${styles.flexCenter} mb-5 h-[128px] w-[128px]`}>
         <img src={icon} alt="title" />
      </div>
      <h3 className={`${styles.heading3} mb-2 text-center`}>{name}</h3>
      <p className={`${styles.body2} mb-5 text-medium-gray`}>{job}</p>
      <ul className='flex flex-row md:mt-0 mb-3'>{socialMedia.map((social, index) => (
         <li key={social.id} className={`${index !== socialMedia.length - 1 ? 'mr-2' : 'mr-0'} brightness-0`}><a href={social.link}><img src={social.icon} alt={social.id} /></a></li>
      ))}</ul>
   </li>
)

const Authors = () => {
   return (
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
         <div className={`${styles.paddingY}`}>
            <h2 className={`${styles.heading2} text-center`}>List of Authors</h2>
         </div>
         <ul className='flex flex-wrap md:flex-nowrap flex-row justify-center md:justify-between gap-5'>{
            authors.map((elem) => <Author key={elem.id} {...elem} />)}
         </ul>
      </div>
   )
}

export default Authors