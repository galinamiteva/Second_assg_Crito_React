import React from 'react'
import Footer from '../componens/Footer'
import BreadCum from '../componens/BreadCum'
import CompanyContact from '../componens/CompanyContact'

const Contact = () => {
  return (
    <div className='wrapper' >

        <BreadCum  title="Let&#39;s Connect"/>     
        <main>
          <CompanyContact/>
        </main>
        <Footer/>
          {/* <main>
          
            <Showcase/>
            <CompanyLogos />    
            <Features /> 
            <AboutCompany/>
            <OurService/>
            <Choose/>
            <Project/>
            <MeetTeam/>
            <ArticleNews/>
            <GetNews/>


          </main>
          
          <Footer/> */}

    </div>
  )
}

export default Contact