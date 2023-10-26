import React from 'react';
import simpleLine from '../assets/images/background-lines.svg';
import showcaseHero from '../assets/images/showcase.svg';
import Container from 'react-bootstrap/Container';
import Button from './Generics/Button';


const Showcase = () => {
  return (
    <section className="showcase">
           
            <Container className="container">
                <div className="showcase-info">
                    <h1 className="showcase-title"> We Provide The Best Business Solutions</h1>
                    <h6 className="showcase-paragraph">Establish your vision and value proposition and turn them into testable prototypes</h6>
                    <div className="showcase-btn">
                     
                        <Button text = 'Get Consulting' url='/services/get-consulting' theme = 'button-yellow'/>
                       
                       <Button text = 'Learn More' url='/services/consulting' theme = 'button-beige'/>
                    </div>
                </div>
                <div className="showcase-img">
                    
                    <img src={showcaseHero} alt="man with glasses" className="showcase-img"/>
                </div> 
                
            </Container>
            
            <img src={simpleLine} alt="simple line" className="simple-line"/>
        </section>
  )
}

export default Showcase