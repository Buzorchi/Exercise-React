import React from 'react'
import { Link } from 'react-router-dom'
import {Formik} from "formik"


const FormPage = () => {
  return (
    <div>
      <Link to ="/" style={{textDecoration: "none"}}>
        <p style={{marginTop: "30px", marginLeft: "40px"}}>Back</p>
      </Link>
      <h1 className='formH1'>Fill out the Form</h1>
      <Formik
       initialValues={{firstName:'', lastName:'', confirmPassword:'',password: '' }}
       validate={values => {
         const errors = {};
         if (!values.firstName) {
           errors.firstName = 'Required';
         } else if (!values.lastName)
         {
           errors.lastName = 'Required';
         }else if(!values.password){
          errors.password ="Required"
         }
         return errors;
       }}
       
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} className='form'>
          <div>
          <label htmlFor="">First Name</label>
           <input
             type="text"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
           />
           {errors.firstName && touched.firstName && errors.firstName}
          </div>

          <div>
          <label htmlFor="">Last Name</label>
           <input
             type="text"
             name="lastName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastName}
           />
           {errors.lastName && touched.lastName && errors.lastName}
          </div>

            <div>
            <label htmlFor="">Password</label>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
            </div>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default FormPage
