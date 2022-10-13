import React from 'react'
import styles from '../../style'

import { overlay, man_in_black } from "../../assets"

const Hero = () => {
   return (
      <div className={`relative flex items-center w-full bg-[url('${man_in_black}')] min-h-[100vh] `}>
         <div className={`absolute h-[100%] w-[100%] bg-[url('${overlay}')]`} />
         <div className={``}></div>
      </div>
   )
}

export default Hero