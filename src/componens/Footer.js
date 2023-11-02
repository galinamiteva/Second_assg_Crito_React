import React from 'react';
import backgr_lines_wh from '../assets/images/background-lines-right.svg';
import logo_white from '../assets/images/logotype-white.svg';


const Footer = () => {
    return (
      <footer  className="footer">
          <div className="footer-upp">
              <img src={backgr_lines_wh} alt="background lines" className="background-lines"/>
              
              <div className="container">
                  
                  <div className="company-info">
                      
                          <img src={logo_white} alt="company-Crito-logo"/>
  
                          <p className="company-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fuga nesciunt sapiente exercitationem nostrum reiciendis ullam. Maiores sapiente tempore tempora.</p>
                  </div>
                  
                  <div className="contact-box">
                      <p className="box-head">Company</p>
                      {/* LINK!!!! */}
                      <a href="/">About</a>
                      <a href="/">Feature</a>
                      <a href="/">Works</a>
                      <a href="/">Career</a>          
                  </div>
                  
                  <div className="contact-box">
                      <p className="box-head">Help</p>
                      <a href="/">Customer Support</a>
                      <a href="/">Delivery Details</a>
                      <a href="/">Terms & Conditions</a>
                      <a href="/">Privacy Policy</a>          
                  </div>
  
                  <div className="contact-box">
                      <p className="box-head">Resources</p>
  
                      <a href="/">Free eBooks</a>
                      <a href="/">Development Tutorial</a>
                      <a href="/">How to-Blog</a>
                      <a href="/">Youtube Playlist</a>          
                  </div>
  
                  <div className="contact-box">
                      <p className="box-head">Link</p>
                      <a href="/">Free eBooks</a>
                      <a href="/">Development Tutorial</a>
                      <a href="/">How to - Blog</a>
                      <a href="/">Yotube Playlist</a>          
                  </div>            
  
              </div>
          </div>
  
          <div className="footer-down">
              <div className="container">
                  <div className="copyright">
                      <p> &#169; 2023 Crito - Consulting Company Inc. All Right Reserved.</p>
                  </div>
  
                  <div className="social-media">
                      <i className="fa-brands fa-facebook"></i>
                      <i className="fa-brands fa-twitter"></i>
                      <i className="fa-brands fa-instagram"></i>
                      <i className="fa-brands fa-linkedin"></i>
                  </div>
              
              </div>
          </div>
  
  
      </footer> 
    )
  }
  
  export default Footer