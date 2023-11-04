import React from 'react';
import Header from '../componens/Header';
import CompanyLogos from '../componens/CompanyLogos';
import Features from '../componens/Features'
import AboutCompany from '../componens/AboutCompany';
import OurService from '../componens/OurService';
import Choose from '../componens/Choose';
import Project from '../componens/Project'
// import Footer from '../componens/Footer';


const Home = () => {
  return (
    <div className='wrapper' >
      <Header/>
      
      <main>
        <CompanyLogos />    
        <Features /> 
        <AboutCompany/>
        <OurService/>
        <Choose/>
        <Project/>

      </main>
       
       {/* <Footer/> */}

    </div>
  )
}

export default Home