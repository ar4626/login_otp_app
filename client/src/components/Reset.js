import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { resetPasswordValidation } from '../helper/validate'

import styles from '../styles/username.module.css'

const Reset = () => {

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: resetPasswordValidation,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async values => {
      console.log(values);
    }
  })

  return (
    <div className='container mx-auto'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} style={{width : "50%"}}>

          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>
              Reset
            </h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter New Password
            </span>
          </div>
          <form className='py-20' onSubmit={formik.handleSubmit}>
            <div className='text-box flex flex-col items-center gap-6'>
              <input {...formik.getFieldProps('password')} className={styles.textbox} type='password' placeholder='New Password' />
              <input {...formik.getFieldProps('confirmPassword')} className={styles.textbox} type='password' placeholder='Confirm Password' />
              <button className={styles.btn} type='submit'>Sign In</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Reset