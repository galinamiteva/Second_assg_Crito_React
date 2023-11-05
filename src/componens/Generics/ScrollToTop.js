import React, { useState, useEfect} from 'react'


const ScrollToTop = () => {
    const [position, setPosition] = useState(0);

    useEfect(() => {
        window.addEventListener('scroll', () => setPosition(window.scrollY))
        return () => window.removeEventListener('scroll', ()=>{})
    }, [] )

    const ScrollToTop = () => {
       window.ScrollToTop ({ top: 0, behavior: 'smooth'}) 
    }

  return (
    <button onClick={ScrollToTop} className={`scrool-to-top ${position < 100 ? 'hide':''} `}> 
        <i class="fa-solid fa-arrow-up"></i>
    </button>
  )
}

export default ScrollToTop