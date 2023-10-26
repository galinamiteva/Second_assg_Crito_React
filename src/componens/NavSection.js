import React from 'react'
import companyLogo from '../assets/images/crito-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume, faLocationDot, faBarsStaggered} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'; 
import Container from 'react-bootstrap/Container';
import Button from './Generics/Button';

const NavSection = () => {
  return (
    <section className='nav-section'>
        

        <Container className="container">       
            
            <img src={companyLogo} alt="company-Crito-logo" className="logo"/>
            
            <FontAwesomeIcon icon={faBarsStaggered} className='fa-bars' />

            <nav className="navigation-bar">
                <div className="upper-info">
                    <div className="business-info">
                        <span className="number"> <FontAwesomeIcon icon={faPhoneVolume} /> +46 (8) 121 470 50</span>
                        <span className="email"> <FontAwesomeIcon icon={faEnvelope} /> info@crito.com</span> 
                        <span className="address"> <FontAwesomeIcon icon={faLocationDot} /> Sveavägen 31, 111 34 STOCKHOLM</span> 
                    </div>
                    <div className="social-media">
                        <span><FontAwesomeIcon icon={faFacebook} /></span>
                        <span><FontAwesomeIcon icon={faTwitter} /></span>
                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                        <span><FontAwesomeIcon icon={faLinkedin} /></span>                 
                    
                       {/*  <i className="fa-brands fa-linkedin"></i> */}
                       
                    </div>
                </div>

                <div className="lower-info">
                    <nav className="navigation-links">
                        <a href="home.html">Home</a>
                        <a href="servise.html">Service</a>
                        <a href="news.html">News</a>
                        <a href="contact.html" >Contact</a>                    
                    </nav>
                   {/*  <div className="login-btn button-yellow"> */}
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