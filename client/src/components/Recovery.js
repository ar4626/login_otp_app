import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from '../helper/validate'

import styles from '../styles/username.module.css'

const Recovery = () => {

  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validate: passwordValidate,
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
        <div className={styles.glass}>

          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>
              Recovery
            </h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter <strong>OTP</strong> to recover your password..
            </span>
          </div>
          <form className='pt-2' >
            <div className='text-box flex flex-col items-center gap-6'>
              <div className='input text-center'>
                <span className='py-4 text-sm text-left text-gray-500'>
                  Enter 6 digit OTP sent to your email address.
                </span>
                <input className={styles.textbox} type='password' placeholder='OTP' />
              </div>
              <button className={styles.btn} type='submit'>Sign In</button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>
                Did't get OTP? &nbsp;
                <button  className='text-red-500' to='/recovery'> Resend</button>
              </span>

            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Recovery