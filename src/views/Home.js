import React from 'react';

import Showcase from '../componens/Showcase';
import CompanyLogos from '../componens/CompanyLogos';
import Features from '../componens/Features'
import AboutCompany from '../componens/AboutCompany';
import OurService from '../componens/OurService';
import Choose from '../componens/Choose';
import Project from '../componens/Project';
import MeetTeam from '../componens/MeetTeam';
import Footer from '../componens/Footer';
import ArticleNews from '../componens/ArticleNews';


const Home = () => {
  

  return (
    <div className='wrapper' >
     
  
      <main>
       
        <Showcase/>
        <CompanyLogos />    
        <Features /> 
        <AboutCompany/>
        <OurService/>
        <Choose/>
        <Project/>
        <MeetTeam/>
        <ArticleNews/>

      </main>
       
       <Footer/>

    </div>
  )
}

export default Home