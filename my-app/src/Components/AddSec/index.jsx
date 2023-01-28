import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import axios from 'axios';
 import './index.scss'
 const SignupForm = () => {
   return (
     <Formik
       initialValues={{ headImage: '', courses: '', items: '' , HumanImage: '', username: '' , job: '' , price: ''  }}
       validationSchema={Yup.object({
         headImage: Yup.string()
           .max(165345, 'Must be 15 characters or less')
           .required('Required'),
         courses: Yup.string()
           .max(26550, 'Must be 20 characters or less')
           .required('Required'),
       })}
       onSubmit={(values) => {
         axios.post(`http://localhost:2023/users` , values)
       }}
     >
        <section className='formik'>
             <Form>
         <label htmlFor="headImage">Image</label>
         <Field name="headImage" type="text" />
         <ErrorMessage name="headImage" />
 
         <label htmlFor="courses">Courses</label>
         <Field name="courses" type="text" />
         <ErrorMessage name="courses" />
 
         <label htmlFor="items">items</label>
         <Field name="items" type="text" />
         <ErrorMessage name="items" />

         <label htmlFor="HumanImage">Worker image</label>
         <Field name="HumanImage" type="text" />
         <ErrorMessage name="HumanImage" />

         <label htmlFor="username">Full name</label>
         <Field name="username" type="text" />
         <ErrorMessage name="username" />

         <label htmlFor="job">Job</label>
         <Field name="job" type="text" />
         <ErrorMessage name="job" />

         <label htmlFor="price">Price</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
        </section>
      
     </Formik>
   );
 };

 export default SignupForm