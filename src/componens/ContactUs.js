import React from 'react';
import {useFormik} from 'formik';
//import Button from './Generics/Button';
import * as Yup from 'yup';


const ContactUs = () => {  //https://www.regextester.com  - validator Regex



  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      name:'',
      email:'',
      message:''

    },
    validationSchema: Yup.object({
      name: Yup.string().min(1).required('Please write a name').matches(
        /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/, 'invalid name'),
      email: Yup.string().min(4).required('Please write an email').matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email'),
      message: Yup.string().required('Please write a message').min(5, 'min 5 characters').max(350, 'The message should be with max 1000 characters'),
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
        alert('Message sent!'); // bättre med feedback  med grön färg -nåt paragrafh!!! Use state funktion
        
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
    <section className="contact-us">
        <div className="container">

            

          <div className='contact-content'>
            <div className='title-form'>
                  <h2 className="title">Leave us a message <br/> for any information</h2>
            </div>


            <form method="post" className="content-box" onSubmit={form.handleSubmit} noValidate>
               
                <div className="form-bit">
                    <label className={form.errors.name  ? 'error' : ''}> {form.errors.name ? form.errors.name : 'Name'}</label>
                    <input className="finput" type="text" name="name" placeholder="Name..." value={form.values.name} onBlur={form.handleBlur} onChange={form.handleChange} />
                </div>

                <div className="form-bit">
                    <label className={form.errors.email ? 'error' : ''}>{form.errors.email  ? form.errors.email : 'Email'}</label>
                    <input className="finput" type="email" name="email" placeholder="Email..." value={form.values.email} onBlur={form.handleBlur} onChange={form.handleChange} />
                </div>

                <div className="form-bit">
                    <label className={form.errors.message ? 'error' : ''}>{form.errors.message  ? form.errors.message : 'Message'}</label>
                    <textarea className="finput message" name="message" placeholder="Message..." value={form.values.message} onBlur={form.handleBlur} onChange={form.handleChange} />
                </div>         
     
                
                <button href="/" className="button-yellow" type="submit">Send Message <i className="fa-solid fa-arrow-up-right-dots"></i></button>
               {/*  <Button text = 'Send Message' url='/' theme = 'button-yellow'  type="submit"/>  fungerar nte*/}
               
                
            </form>
               </div>
        </div>
    </section>
  )
}

export default ContactUs