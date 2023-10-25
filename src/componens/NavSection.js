import React from 'react'
import companyLogo from '../assets/images/crito-logo.svg';

const NavSection = () => {
  return (
    <section className='nav-section'>

        <div className="container">       
            
            <img src={companyLogo} alt="company-Crito-logo" className="logo"/>
            
            <i className="fa-solid fa-bars"></i>

            <nav className="navigation-bar">
                <div className="upper-info">
                    <div className="business-info">
                        <span className="number"> <i className="fa-solid fa-phone-volume"></i> +46 (8) 121 470 50</span>
                        <span className="email"> <i className="fa-regular fa-envelope"></i> info@crito.com</span> 
                        <span className="address"> <i className="fa-solid fa-location-dot"></i> Sveavägen 31, 111 34 STOCKHOLM</span> 
                    </div>
                    <div className="social-media">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>

                <div className="lower-info">
                    <nav className="navigation-links">
                        <a href="home.html">Home</a>
                        <a href="servise.html">Service</a>
                        <a href="news.html">News</a>
                        <a href="contact.html" >Contact</a>                    
                    </nav>
                    <div className="login-btn button-yellow">
                        <a href="login.html"><span>Login</span><i className="fa-solid fa-arrow-up-right-dots"></i></a>
                        
                    </div>
                </div> 
            </nav>
        </div>
    </section>
  )
}

export default NavSection