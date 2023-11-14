import React from 'react'

const ContactUs = () => {
  return (
    <section className="contact-us">
        <div className="container">

            <form method="post" className="content-box">
            <h2 className="title">Leave us a message <br/> for any information</h2>
                <input type="text" name="name" id="name" placeholder="Name*"/>
                <input type="email" name="email" id="email" placeholder="Email*"/>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message*"></textarea>

                
                    <a href="/" className="button-yellow" type="submit">Send Message <i className="fa-solid fa-arrow-up-right-dots"></i></a>
                
                
            </form>
        </div>
    </section>
  )
}

export default ContactUs