import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {passwordValidate} from '../helper/validate'

import styles from '../styles/username.module.css'

const Password = () => {

    const formik = useFormik({
        initialValues: {
            password : ''
        },
        validate : passwordValidate,
        validateOnChange:false,
        validateOnBlur:false,
        onSubmit : async values => {
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
                        Hello Again
                    </h4>
                    <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                        Explore More By connecting with us.
                    </span>
                </div>
                <form className='py-1' onSubmit={formik.handleSubmit}>
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} alt='avtar ' className={styles.profile_img}/>
                    </div>
                    <div className='text-box flex flex-col items-center gap-6'>
                        <input {...formik.getFieldProps('password')} className={styles.textbox} type='password' placeholder='Password' />
                        <button className={styles.btn} type='submit'>Sign In</button>
                    </div>
                    <div className='text-center py-4'>
                        <span className='text-gray-500'>
                            Forgot Password ?
                            <Link className='text-red-500' to='/recovery'> Recover Now</Link>
                        </span>

                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Password