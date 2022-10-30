import React from 'react'
import styles from '../style'

import { Field, useFormikContext } from 'formik';
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

const Select = ({ name, options, ...rest }) => {
   const [selected, setSelected] = React.useState(options[0])
   const [showOptions, setShowOptions] = React.useState(false)

   const { values } = useFormikContext();

   React.useEffect(() => {
      values.purpose = selected
   }, [selected]);

   return (
      <div className='my-4'>
         <div className={`${styles.body1} relative w-full p-6 border-[1px] border-[#6D6E76] text-[#000] cursor-pointer`} onClick={() => setShowOptions((prev => !prev))}>
            <p>{selected.text}</p>
            {showOptions && <ul className='absolute top-[100%] left-[-1px] right-[-1px] bg-black shadow-2xl' >
               {options.filter((purpose) => purpose.value !== selected.value).map((purpose, index) => (
                  <SelectField name={name} purpose={purpose} setSelected={setSelected} options={options} index={index} key={purpose.value} {...rest} />
               ))}
            </ul>}
            <div className='absolute right-[2px] top-[25%] h-[50%] w-[30px] sm:w-[60px] bg-white' >
               <img className={`${setShowOptions === true ? 'rotate-180' : 'rotate-0'} mt-[15px]`} src={arrow_down} alt="select purpose" />
            </div>
         </div>
      </div>
   )
}

const SelectField = ({ name, purpose, setSelected, options, index, ...rest }) => {
   return (
      <Field {...rest}
         as="li" id={name} name={name} className={`${index !== options.length - 2 ? 'border-b-0' : 'border-b-[1px]'} border-[1px] border-[#6D6E76] display-block px-6 py-3  bg-white hover:bg-gray-100`} onClick={() => setSelected(purpose)} value={purpose.value}>{purpose.text}</Field>
   )
}

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



