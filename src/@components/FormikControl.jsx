import React from 'react'
import styles from '../style'

import { Field } from 'formik';
import { arrow_down } from '../assets';

function FormikControl(props) {
   const { control, ...rest } = props

   switch (control) {
      case 'input':
         return <Input {...rest} />
      case 'select':
         return <Select {...rest} />
      case 'textarea':
         return <Textarea {...rest} />
      case 'button':
         return <Button {...rest} />
      default:
         return null
   }
}

const Input = ({ name, ...rest }) => (
   <div className='my-4'>
      <Field className={`${styles.body1} w-full p-6 border-[1px] border-[#6D6E76] text-[#000] placeholder-black`} as='input' id={name} name={name} {...rest} />
   </div>
)

const Select = ({ name, options, ...rest }) => (
   <div className='relative my-4'>
      <Field className={`${styles.body1} w-full px-5 py-7 border-[1px] border-[#6D6E76] text-[#000]`} as='select' id={name} name={name} {...rest} >{
         options.map((purpose) => (
            <option key={purpose.value} value={purpose.value}>{purpose.text}</option>
         ))
      }</Field>
      <div className={`absolute right-[2px] top-[25%] h-[50%] w-[30px] sm:w-[60px] bg-white`} >
         <img className='mt-[15px]' src={arrow_down} alt="select purpose" />
      </div>
   </div>
)

const Textarea = ({ name, ...rest }) => (
   <div className='my-4'>
      <Field className={`${styles.body1} w-full p-6 border-[1px] border-[#6D6E76] text-[#000] placeholder-black resize-none`} as='textarea' id={name} name={name} {...rest} />
   </div>
)

const Button = ({ name, text, ...rest }) => (
   <div>
      <Field className='w-full font-sen py-[8px] xs:py-[11px] px-[30px] xs:px-[48px] font-semibold text-[16px] xs:text-[24px] bg-yellow text-black hover:bg-[#EDC14A]' as="button" id={name} name={name} {...rest}>{text}</Field>
   </div>
)

export default FormikControl