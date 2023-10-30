import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { registerValidation } from '../helper/validate'
import convertToBase64 from '../helper/convert'

import styles from '../styles/username.module.css'

const Profile = () => {

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
      <div className='flex justify-center items-center h-screen'>
        <div className={`${styles.glass} ${styles.autoHeight}`} style={{ width: '50%' }}>

          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>
              Welcome
            </h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Happy to join You.
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile