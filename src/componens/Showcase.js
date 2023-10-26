import React from 'react';
import simpleLine from '../assets/images/background-lines.svg';
import showcaseHero from '../assets/images/showcase.svg';
import Container from 'react-bootstrap/Container';
import Button from './Generics/Button';


const Showcase = () => {
  return (
    <section className="showcase">
            {/* <div className="container"> */}
            <Container className="container">
                <div className="showcase-info">
                    <h1 className="showcase-title"> We Provide The Best Business Solutions</h1>
                    <h6 className="showcase-paragraph">Establish your vision and value proposition and turn them into testable prototypes</h6>
                    <div className="showcase-btn">
                        {/* <a href="consulting.html" className="button-yellow">Get Consulting<i className="fa-solid fa-arrow-up-right-dots"></i></a> */}
                        <Button text = 'Get Consulting' url='/services/get-consulting' theme = 'button-yellow'/>
                       {/*  <a href="service.html" className="button-beige">Learn More<i className="fa-solid fa-arrow-up-right-dots"></i></a> */}
                       <Button text = 'Learn More' url='/services/consulting' theme = 'button-beige'/>
                    </div>
                </div>
                <div className="showcase-img">
                    
                    <img src={showcaseHero} alt="man with glasses" className="logo"/>
                </div> 
                
            </Container>
            
            <img src={simpleLine} alt="simple line" className="logo"/>
        </section>
  )
}

export default Showcase