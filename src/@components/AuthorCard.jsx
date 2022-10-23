import React from 'react'
import styles from '../style'

const AuthorCard = ({ icon, name, job, socialMedia }) => (
   <li className='flex flex-col items-center min-w-[300px] p-8  bg-light-gray hover:bg-light-yellow'>
      <div className={`${styles.flexCenter} mb-5 h-[128px] w-[128px]`}>
         <img src={icon} alt="title" />
      </div>
      <h3 className={`${styles.heading3} mb-2 text-center`}>{name}</h3>
      <p className={`${styles.body2} mb-5`}>{job}</p>
      <ul className='flex flex-row md:mt-0 mb-3'>{socialMedia.map((social, index) => (
         <li key={social.id} className={`${index !== socialMedia.length - 1 ? 'mr-2' : 'mr-0'} brightness-0`}><a href={social.link}><img src={social.icon} alt={social.id} /></a></li>
      ))}</ul>
   </li>
)

export default AuthorCard