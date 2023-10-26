import React from 'react'
import Paperz from '../assets/images/paperz.svg';
import Dorfus from '../assets/images/dorfus.svg';
import Martino from '../assets/images/martino.svg';
import Square from '../assets/images/square.svg';
import Gobona from '../assets/images/gobona.svg';
import Container from 'react-bootstrap/Container';


const CompanyLogos = () => {
  return (

    <section className="company_logos">
        <Container className="container">
            <img src={Paperz} alt="logo paperz"/>
            <img src={Dorfus} alt="logo dorfus"/>
            <img src={Martino} alt="logo martino"/>
            <img src={Square} alt="logo square"/>
            <img src={Gobona} alt="logo gobona"/>        
        </Container>
    </section>


  )
}

export default CompanyLogos 

/* import React from 'react'
import Paperz from '../assets/images/paperz.svg';
import Dorfus from '../assets/images/dorfus.svg';
import Martino from '../assets/images/martino.svg';
import Square from '../assets/images/square.svg';
import Gobona from '../assets/images/gobona.svg';
import Container from 'react-bootstrap/Container';
import CompanyLogo from '../componens/Generics/CompanyLogo';

const CompanyLogos = () => {
    const logos =[
      
       {id:"1", src: Paperz, alt:"logo paperz"  }, 
        {id:"2", src:{Dorfus}, alt:"logo dorfus"  },
        {id:"3", src: Martino, alt:"logo martino"  },
        {id:"4", src: Square, alt:"logo square"  },
        {id:"5", src: Gobona, alt:"logo gobona"  },
        

    ]

    return (

        <section className="company_logos">
            <Container className="container">
                    { logos.map((logo, index) =>(
                        <CompanyLogo key={logo.id} src={logo.src} alt={logo.alt}/>
                    ))}  
            </Container>
        </section>
    
    
      )
    }
    export default CompanyLogos */