import React from 'react'
import styles from '../style'

import { Button } from '.'

const Join = () => {
   return (
      <section className={`${styles.paddingX} ${styles.paddingY} flex justify-center my-10`}>
         <div className='flex flex-col items-center'>
            <h2 className={`${styles.heading2} text-center mb-5`}>Join our team to be a part <br /> of our story</h2>
            <p className={`${styles.body1} text-center mb-7`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt.</p>
            <Button text='Join Now' />
         </div>
      </section>
   )
}

export default Join