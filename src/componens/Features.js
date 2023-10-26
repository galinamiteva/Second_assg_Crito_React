import React from 'react'
import Button from './Generics/Button';
import FeaturesBox from './Generics/FeaturesBox';
import Container from 'react-bootstrap/Container';

const Features = () => {

const services = [
    {title:"Business Advice", icon:"fa-regular fa-handshake", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." , url:"/services/businessadvice"},
    {title:"Startup Business", icon:"fa-regular fa-lightbulb", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." , url:"/services/startupbusiness"},
    {title:"Financial Advice", icon:"fa-solid fa-ranking-star", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." , url:"/services/financialadvice"},
    {title:"Risk Management", icon:"fa-solid fa-box", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." , url:"/services/riskmanagement"},
]    


  return (
    
    <section className="features">
        <Container className="container wrapper">   
        
            <div className="features-info">
                <h5 className="red-text">Features</h5>            
                <div className="feature-mobile">
                    <h2 className="features-title title">Our Accounting is trusted by thousand of companies</h2>
                    {/* <a href="#" className="button-yellow">Learn More<i className="fa-solid fa-arrow-up-right-dots"></i></a> */}
                    <Button text = 'Learn More' url='/services/consulting' theme = 'button-yellow' />

                </div>
            </div>
            <div className="features-aside">

                {/* <a className="feature-grid" href='/services/businessadvice'>
                    <div>
                        <i className="fa-regular fa-handshake"></i>
                    </div>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a> */}

                {
                    services.map((service, index) =>(
                        <FeaturesBox key= {index} title={service.title} icon={service.icon} description={service.description} url = {service.url} />
                    )) 
                }

                
            </div>
            
        </Container> 
    </section>
  )
}

export default Features