import React from 'react'
import Kristina from '../assets/images/Kristina.png';
import Mark from '../assets/images/Mark.png';
import Kimberly from '../assets/images/Kimberly.png';
import Justin from '../assets/images/Justin.png';
import Cassandra from '../assets/images/CassandraW.png';
import Amanda from '../assets/images/Amanda.png';
import Jack from '../assets/images/JackMc.png';
import Button from './Generics/Button';
import MemberBox from '../componens/Generics/MemberBox';



const MeetTeam = () => {
  return (
    <section className="meet-our-team">

    <div className="container">

        <div className="meet-team-title">
                   
             <div className= "meet-title">
                <h5 className="red-text">Meet Our Team</h5>
                <h2 className="title">Experience Team Members</h2>
            </div> 
            
            

            <div className="browse-button">                
               
                <Button text = 'Browse Team' url='/service' theme = 'beige' />
            </div>        
            
            <div className="browse-button-mobile">                
               
                <Button text = 'Browse Team' url='/service' theme = 'beige' />
            </div>               
          
            
            
        </div>
        
    
        <div className="meet-team-members">

            
           
            <MemberBox img = {Kristina} altText= "bild of Kristine Palmer" name= "Kristine Palmer" description='Chef Operation Officer' />
            <MemberBox  img={Mark} name='Mark Aubri' description='Senior Consultant' altText='Mark Aubri img'/>
            <MemberBox  img={Kimberly} name='Kimberly Hansen' description='Senior Consultantr' altText='Kimberly Hansen img'/>
            <MemberBox  img={Justin} name='Justin Willoman' description='Senior Tech Consultant' altText='Justin Willoman img'/>

 
                               
            
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
                            <div className="client-img"><img src={Cassandra} alt="Cassandra Warren"/></div>
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
                            <div className="client-img"><img src={Amanda} alt="Amanda Tulling"/></div>
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
                            <div className="client-img"><img src={Jack} alt=" Jack McDogglas"/></div>
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