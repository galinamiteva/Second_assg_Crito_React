import React from 'react'
import companyLogo from '../assets/images/crito-logo.svg';

import Container from 'react-bootstrap/Container';
import Button from './Generics/Button';

const NavSection = () => {
  return (
    <section className='nav-section'>
        

        <Container className="container">       
            
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
                  
                   <div className="login-btn">
                        
                         <Button text = 'Login' url='/login' theme = 'button-yellow' />
                        
                    </div>
                </div> 
            </nav>
            </Container>
    </section>
  )
}

export default NavSection