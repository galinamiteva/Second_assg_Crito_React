import React from 'react';
// import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom'; 

import Home from './views/Home';
import Contact from './views/Contact';
import News from './views/News';
import NewsDetails from './views/NewsDetails';

import Service from './views/Service';
import Login from './views/Login';
import NotFound from './views/NotFound/NotFound';
import NavSection from './componens/NavSection';
import AutoScrollToTop from './componens/Generics/AutoScrollToTop';
import ScrollToTop from './componens/Generics/ScrollToTop';




const App = () => {
  return (
  <>

    <AutoScrollToTop/>
    <ScrollToTop/>        
    <NavSection/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/home' element ={<Home/>}/>
      <Route path='/news' element ={<News/>}/>
      <Route path='/news_details' element ={<NewsDetails/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/service' element ={<Service/>}/>
      <Route path='/login' element ={<Login/>}/>
     <Route path='*' element ={<NotFound/>}/>
  
    </Routes>
  </>
   
  )
}

export default App