import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { resetPasswordValidate } from '../helper/validate.js'

import styles from '../style/user.module.css'

function Reset() {

const formik = useFormik({
  initialValues : {
    password : "",
    confirm_password : ""
  },
  validate : resetPasswordValidate,
  validateOnBlur : false,
  validateOnChange : false,
  onSubmit : async values => {
    console.log(values)
  }
})

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center h-screen">
            <div className={styles.glass} style={{width : "50%"}}>
                <div className="title flex flex-col items-center">
                    <h4 className="text-5xl font-bold">Reset Password</h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                      Enter your new password 
                    </span>
                </div>

                <form className='py-20' onSubmit={formik.handleSubmit}>
                 
                  <div className='textbox flex flex-col items-center gap-6'>
                    <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />
                    <input {...formik.getFieldProps('confirm_password')} className={styles.textbox} type="text" placeholder='Confirm Password' />
                    <button type='Submit' className={styles.btn}>Reset</button>
                  </div>

                  <div className="text-center py-4">
                    <span className='text-gray-500'>Don't know Password?<Link className='text-red-500' to="/recover">Forgot Password</Link></span>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Reset
