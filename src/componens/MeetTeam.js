import React from 'react'

const MeetTeam = () => {
  return (

<section className="meet-our-team">

    <div className="container">

        <div className="meet-team-title">
            
            <div meet-title>
                <h5 className="red-text">Meet Our Team</h5>
                <h2 className="title">Experience Team Members</h2>
            </div>
            
            <div className="browse-button">                
                <a href="/" className="button-beige">Browse Team <i className="fa-solid fa-arrow-up-right-dots"></i></a>
            </div>        
            
            <div className="browse-button-mobile">                
                <a href="/" className="button-beige">Browse Team <i className="fa-solid fa-arrow-up-right-dots"></i></a>
            </div>               
          
            
            
        </div>
        
    
        <div className="meet-team-members">

            <div className="member">
                <img src="./images/Kristina.png" alt="bild of Kristine Palmer"/>
                <h3 className="name">Kristine Palmer</h3>
                <p className="job">Chef Operation Officer</p>               

            </div>
            <div className="member">
                <img src="./images/Mark.png" alt="bild of Mark Aubri"/>
                <h3 className="name" >Mark Aubri</h3>
                <p className="job">Senior Consultant</p>               

            </div>
            <div className="member">
                <img src="./images/Kimberly.png" alt="bild of Kimberly Hansen"/>
                <h3 className="name">Kimberly Hansen</h3>
                <p className="job" >Senior Consultant</p>               

            </div>
            <div className="member">
                <img src="./images/Justin.png" alt="bild of Justin Willoman"/>
                <h3>Justin Willoman</h3>
                <p className="job" >Senior Tech Consultant</p>                             
            </div>
                       
            
        </div>

        <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>                
        </div>
    

        {/* <!-- ------------------------Testimonial start-----------------> */}

        <section className="testimonial">
            
                <div className="testimonial-title">
                    <h5 className="red-text">Testimonial</h5>
                    <h2 className="title">What Our Client Says</h2>
                </div>
                
            
                <div className="container">

                    <div className="flex-box">
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque suscipit ea similique rerum, voluptatibus ad expedita nulla sapiente doloremque, quam iste minus?</p>
                    
                        <div className="client">
                            <div className="client-img"><img src="./images/CassandraW.png" alt="Cassandra Warren"/></div>
                            <div className="client-info">
                                <h3 className="name">Cassandra Warren</h3>    
                                <p className="title-red red-text">Business Manager, Dorfus</p> 
                            </div>                  
                        </div>
                    </div>

                    <div className="flex-box">
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque suscipit ea similique rerum, voluptatibus ad expedita nulla sapiente doloremque, quam iste minus?</p>
                    
                        <div className="client">
                            <div className="client-img"><img src="./images/Amanda.png" alt="Amanda Tulling"/></div>
                            <div className="client-info">
                                <h3 className="name">Amanda Tulling</h3>    
                                <p className="title-red red-text">Senior Developer, Square</p> 
                            </div>                  
                        </div>
                    </div>            

                    <div className="flex-box">
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque suscipit ea similique rerum, voluptatibus ad expedita nulla sapiente doloremque, quam iste minus?</p>
                    
                        <div className="client">
                            <div className="client-img"><img src="./images/JackMc.png" alt=" Jack McDogglas"/></div>
                            <div className="client-info">
                                <h3 className="name">Jack McDogglas</h3>    
                                <p className="title-red red-text">Key Account Manager, Gobona</p> 
                            </div>                  
                        </div>
                    </div>

                </div>

                <div className="testimonial-btn">
                    <a href="/" className="button-black">All Reviews <i className="fa-solid fa-arrow-up-right-dots"></i></a>
                </div>            
        </section>

    </div>

</section>
  )
}

export default MeetTeam