import React from 'react'

import image404 from '../assets/images/Error-Page-404.jpg';
import Button from '../componens/Generics/Button';
import Footer from '../componens/Footer';


const NotFound = () => {
  return (
    <div className='not-found'>
      <main >
        <section className='not-found-section'>
              <img src={image404} alt="404 page not found" className="image404"/>
              <h2 className='title'>Page Not Found</h2>
              <p> Unable to find the page that you are looking for</p>
             
              <Button text = 'Go Back to the Beginning' url='/' theme = 'button-yellow' />
        </section>
      </main>
      
      <Footer/>

    </div>
  )
}

export default NotFound