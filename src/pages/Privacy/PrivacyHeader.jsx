import React from 'react'
import styles from '../../style'

const PrivacyHeader = () => (
   <header className={`${styles.flexCenter} py-10 md:py-20 bg-lavender`}>
      <div className={`${styles.paddingX} flex flex-col items-center`}>
         <h1 className={`${styles.heading1} text-center mb-2`}>Privacy Policy</h1>
         <p className={`${styles.body1} text-center`}>Last Updated  on 27th January 2022</p>
      </div>
   </header>
)


export default PrivacyHeader