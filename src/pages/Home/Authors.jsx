import React from 'react'
import styles from '../../style'

import { authors } from '../../constants'
import { AuthorCard } from '../../@components';

const Authors = () => (
   <section className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className='py-[48px]'>
         <h2 className={`${styles.heading2} text-center`}>List of Authors</h2>
      </div>
      <ul className='flex flex-wrap flex-row justify-center md:justify-between gap-8'>{
         authors.slice(0, 4).map((elem) => <AuthorCard key={elem.id} {...elem} />)}
      </ul>
   </section>
)


export default Authors