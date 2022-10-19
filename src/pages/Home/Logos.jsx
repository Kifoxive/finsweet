import React from 'react'
import styles from '../../style'

import { logos } from "../../constants"

const Logos = () => {
   return (
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
         <ul className='flex flex-wrap flex-col xs:flex-row justify-between items-center'>
            {logos.map((logo, index) => (
               <li className='flex flex-col p-5' key={logo.id}>
                  {index === 0 ? <p className={`${styles.body2} mb-1 text-medium-gray`}>We are</p> : ''}
                  <img className={`${index !== 0 ? "opacity-80" : "opacity-100"}`} src={logo.icon} alt="company" />
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Logos