import React from 'react'
import backgroundLines from '../assets/images/background-wavy-lines.svg';


const GetNews = () => {
  return (
    <section className="news-form">
    <img src={backgroundLines} alt="wavy lines" className="background-lines"/>
    <div className="container">
         <h2 className="title">Get News Updates By Signup</h2>
       <form metod="post">
            <input    name="email" className="signup-input" type="email" placeholder="username@domain.com" />
            <button href="/" className="button-yellow" type="submit">Subscribe <i className="fa-solid fa-arrow-up-right-dots"></i></button>
        </form>
    </div>
</section>
  )
}

export default GetNews