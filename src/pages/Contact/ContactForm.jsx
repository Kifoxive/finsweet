import React from 'react'
import styles from '../../style'

import { Formik, Form } from 'formik';
import { purposesOptions } from '../../constants';
import { FormikControl } from '../../@components';

const ContactForm = () => {
   const initialValues = {
      fullname: '',
      email: '',
      purpose: "related",
      message: ''
   }

   const onSubmit = values => console.log(JSON.stringify(values, null, 2))

   return (
      <section className={`${styles.flexCenter}`}>
         <div className={`w-[768px] pt-4 pb-16 sm:pb-32 px-6 md:px-0`}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>{
               formik => (
                  <Form>
                     <FormikControl control="input" name="fullname" type="name" placeholder="Full Name" />
                     <FormikControl control="input" name="email" type="email" placeholder="Your Email" />
                     <FormikControl control="select" name="purpose" options={purposesOptions} />
                     <FormikControl control="textarea" name="message" placeholder="Message" rows="4" />
                     <FormikControl control="button" name="submit" type="submit" text="Send Message" />
                  </Form>
               )
            }</Formik>
         </div>
      </section >
   )
}

export default ContactForm