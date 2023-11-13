import React from 'react'

const CompanyContact = () => {
  return (
    <section clasName="company-contact">
        <div clasName="container">
                       

            <div clasName="box-item">
                <div clasName="icon">
                    <i clasName="fa-solid fa-location-dot"></i>
                </div>                
                <div clasName="text-content">
                    <h3>Visit us</h3>
                    <p>Sveavägen 31</p>
                    <p>111 31 STOCKHOLM</p>                    
                </div>
            </div>        

        
            <div clasName="box-item">
                <div clasName="icon">
                    <i clasName="fa-solid fa-phone"></i>
                </div>                
                <div clasName="text-content">
                    <h3>Call us</h3>
                    <p>+46 (8) 121 470 50</p>
                    <p>+46 (8) 121 470 51</p>                    
                </div>
            </div>        

        
            <div clasName="box-item">
                <div clasName="icon">
                    <i clasName="fa-regular fa-envelope"></i>
                </div>                
                <div clasName="text-content">
                    <h3>Email us</h3>
                    <p>info@crito.com</p>
                    <p>support@crito.com</p>                    
                </div> 
            </div>
        </div>

    </section>  
  )
}

export default CompanyContact