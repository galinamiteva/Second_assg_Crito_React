import React from 'react';
import backgr_lines from '../assets/images/background-lines-right.svg';
import ServiceBox from './Generics/ServiceBox';

const OurService = () => {
  return (
    <section className="our-service">
    <img src={backgr_lines} alt="right lines"/>
    
    <div className="container">
   
        
        <div className="our-service-info">
            <h5 className="red-text">Our Services</h5>
            <h2 className="our-service-title title">We Provide The Best Service For Consulting</h2>
        </div>
        
        
        <div className="flex-wrapper">

            <ServiceBox title="Business Advice" url="/services" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iure voluptatum, neque"/>
            <ServiceBox title="Startup Business" url="/services" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iure voluptatum, neque"/>
            <ServiceBox title="Financial Advice" url="/services" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iure voluptatum, neque"/>
            <ServiceBox title="Risk Management" url="/services" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iure voluptatum, neque"/>

            
        </div>
        
        <div className="our-service-btn">
            <a href="/" className="button-beige">Browse Services
                <i className="fa-solid fa-arrow-up-right-dots"></i>
            </a>
        </div>
    </div>
</section>
  )
}

export default OurService