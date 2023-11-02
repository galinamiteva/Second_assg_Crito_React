import React from 'react';
import Header from '../componens/Header';
import CompanyLogos from '../componens/CompanyLogos';
import Features from '../componens/Features'
import AboutCompany from '../componens/AboutCompany';
//import Footer from '../componens/Footer';


const Home = () => {
  return (
    <div className='wrapper' >
      <Header/>
      
      <main>
        <CompanyLogos />    
        <Features /> 
        <AboutCompany/>
      </main>
       
      {/*  <Footer/> */}

    </div>
  )
}

export default Home