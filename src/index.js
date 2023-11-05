import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './main.css'

import Home from './views/Home';
import Contact from './views/Contact';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import NotFound from './views/NotFound';
import Service from './views/Service';
import Login from './views/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
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
     </BrowserRouter>
  </React.StrictMode>
);

