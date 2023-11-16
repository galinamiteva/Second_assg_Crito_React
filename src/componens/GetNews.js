import React from 'react'
import backgroundLines from '../assets/images/background-wavy-lines.svg';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const GetNews = () => {
  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      
      email:''    

    },
    validationSchema: Yup.object({
      
      email: Yup.string().min(4).required('Please write an email').matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email'),
     
      policy: Yup.boolean().oneOf([true], 'Terms & Conditions muct be checked')

    }),
    onSubmit: async (values, {resetForm}) => {
     
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.status === 200) {
        alert('Message sent!');
        
        resetForm({values:''})
      } else if (response.status === 400) {
        alert('Provided data is invalid');
       
      }

      else {
        alert('Failed to send the message');
      }
    }
  });

  return (
    <section className="news-form">
    <img src={backgroundLines} alt="wavy lines" className="background-lines"/>
    <div className="container">
         <h2 className="title">Get News Updates By Signup</h2>
       <form metod="post" className="content-box" onSubmit={form.handleSubmit} noValidate>
           {/*  <input    name="email" className="signup-input" type="email" placeholder="username@domain.com" /> */}

            <div className="form-bit">
              <label className={form.errors.email ? 'error' : ''}>{form.errors.email  ? form.errors.email : 'Email'}</label>
              <input className="finput" type="email" name="email" placeholder="Email..." value={form.values.email} onBlur={form.handleBlur} onChange={form.handleChange} />
            </div>
            <button href="/" className="button-yellow" type="submit">Subscribe <i className="fa-solid fa-arrow-up-right-dots"></i></button>
        </form>
    </div>
</section>
  )
  
}

export default GetNews