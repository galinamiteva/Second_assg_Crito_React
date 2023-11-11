/* import React, { useState, useEfect} from 'react'


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

export default ScrollToTop */

import { useState, useEffect} from 'react';
//import {useLocation} from 'react-router-dom';

const ScrollToTop = () => {
    //const location = useLocation()
    const [position, setPosition] = useState(0);

    /* useEffect{()=>{
      window.addEventListener('scroll', () => {
        setPosition(window.scrollY)
      })
    }} */

     useEffect(()=>{
      window.addEventListener('scroll', () =>{
        setPosition(window.scrollY)
      })
     })      


    const scrollTo =() =>{
      window.scrollTo({ top:0, behavior:'smooth'})
    }

  return (
    <button onClick={(scrollTo)} className={`btn-scroll-to-top ${position <600 ? 'hide-btn' : ''}`}>
    <i class="fa-solid fa-arrow-right-long"></i>
  </button>
  )

  
    
  
}

export default ScrollToTop;