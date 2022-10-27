import React from 'react'
import styles from '../../style'

import { privacyPolicy } from '../../constants'

const Body = () => (
   <section className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className={`${styles.paddingY} px-6 md:px-0 max-w-[768px]`}>
         <h2 className={`${styles.heading1} mb-8`}>{privacyPolicy.title1}</h2>
         <p className={`${styles.body1} mb-8`}>{privacyPolicy.text1}</p>
         <h2 className={`${styles.heading2} mb-8`}>{privacyPolicy.title2}</h2>
         <p className={`${styles.body1} mb-8`}>{privacyPolicy.text2}</p>
         <p className={`${styles.body1} mb-8`}>{privacyPolicy.text2}</p>
      </div>
   </section>
)


export default Body