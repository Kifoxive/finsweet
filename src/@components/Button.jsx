import React from 'react'

import { Link } from 'react-router-dom';

const Button = ({ text = ">", path = "/" }) => (
   <Link to={path} className='font-sen py-[8px] xs:py-[11px] px-[30px] xs:px-[48px] font-semibold text-[16px] xs:text-[24px] bg-yellow text-black hover:bg-[#EDC14A]'>{text}</Link>
)

export default Button