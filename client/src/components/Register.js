import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { registerValidation } from '../helper/validate'
import convertToBase64 from '../helper/convert'

import styles from '../styles/username.module.css'

const Register = () => {

  const [file, setFile] =  useState();

  const formik = useFormik({
    initialValues: {
      name: '',
      company: '',
      email: '',
      role: '',
      department: '',
      password: '',
      confirmPassword: ''
    },
    validate: registerValidation,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async values => {
      values = await Object.assign(values, {profile:file || ''});
      console.log(values);
    }
  })

  //handler for uploading the profile image
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);

  }

  return (
    <div className='container mx-auto'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center py-14'>
        <div className={`${styles.glass} ${styles.autoHeight}`} style={{ width: '50%' }}>

          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>
              Sign Up
            </h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Happy to join You.
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile'>
                <img src={file || avatar} alt='avtar ' className={styles.profile_img} />
              </label>
              <input onChange={onUpload} type='file' id='profile' name='profile' />
            </div>
            <div className='text-box flex flex-col items-center gap-6'>
              <div className='flex'>
                <input {...formik.getFieldProps('name')} className={styles.textbox} type='text' style={{marginRight:"10px"}} placeholder='Name*' />
                <input {...formik.getFieldProps('company')} className={styles.textbox} type='text' placeholder='Company Name' />
              </div>
              <div className='flex'>
                <input {...formik.getFieldProps('role')} className={styles.textbox} type='role' style={{marginRight:"10px"}} placeholder='Role/Title' />
                <input {...formik.getFieldProps('department')} className={styles.textbox} type='department' placeholder='Department' />
              </div>
              <div>
                <input {...formik.getFieldProps('email')} className={styles.textbox} style={{width:"543px"}} type='email' placeholder='Email*' />
              </div>
              <div className='flex'>
                <input {...formik.getFieldProps('password')} className={styles.textbox} type='password' style={{marginRight:"10px"}} placeholder='Password*' />
                <input {...formik.getFieldProps('confirmPassword')} className={styles.textbox} type='password' placeholder='Confirm Password*' />
              </div>
              <button className={styles.btn} type='submit'>Sign Up</button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>
                Already Registered ?
                <Link className='text-red-500' to='/'> Login Now</Link>
              </span>

            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Register