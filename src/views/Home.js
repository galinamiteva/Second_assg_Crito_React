import React from 'react';
// import NavSection from '../componens/NavSection';
import Showcase from '../componens/Showcase';
import CompanyLogos from '../componens/CompanyLogos';
import Features from '../componens/Features'
import AboutCompany from '../componens/AboutCompany';
import OurService from '../componens/OurService';
import Choose from '../componens/Choose';
import Project from '../componens/Project';
import MeetTeam from '../componens/MeetTeam';

//import { useLocation } from 'react-router-dom';

// import Footer from '../componens/Footer';


const Home = () => {
  //const location=useLocation()

  return (
    <div className='wrapper' >
     {/*  <NavSection/> */}
      
      <main>
       {/*  <p>useLocation:{location.pathname}</p>  !!!!!!!!!!!!!!!!!!! ???????????**/}
        <Showcase/>
        <CompanyLogos />    
        <Features /> 
        <AboutCompany/>
        <OurService/>
        <Choose/>
        <Project/>
        <MeetTeam/>
      </main>
       
       {/* <Footer/> */}

    </div>
  )
}

export default Home