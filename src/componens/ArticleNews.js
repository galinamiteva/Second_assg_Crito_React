import React from 'react';
import smile_25mar from '../assets/images/Smile_25_mar.png';
import article_17mar from '../assets/images/article_17_mar.png';
import book_13mar from '../assets/images/Book_13mar.png';
import Button from './Generics/Button';


const ArticleNews = () => {

    const artcles =  [
        {title:"How To Use Digitalization In The Classroom", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure" , url:"/service", img: {smile_25mar}},
        {title:"How To Implement ChatGpt In Your Projects", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure" , url:"/service", img: {article_17mar}},
        {title:"How Guide To Support Modern CSS Design", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure" , url:"/service", img: {book_13mar}}
       
    ]    
    
    
  return (
    <section className="article">
        <div className="container">


            <div className="article-title">
                <div className="container-title">                
                    <h5 className="red-text">Article & News</h5>
                    <h2 className="title"> Get Every Single Articles & News </h2>
                </div>                 

                <Button text = 'Browse Articles' url='/news' theme = 'beige' />
               
                
            </div>        
                
            <div className="article-content">

                {/* <div className="content-box">
                    <div className="article-img">

                    <img src={smile_25mar} alt="smiling woman "/>
                    </div>
    
                    <div className="business-text">
                        <p>Business</p>
                        <h3>How To Use Digitalization In The Classroom</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                    </div>

                </div> */}

                <div className="content-box">
                    <div className="article-img">
                        
                        <img src={article_17mar} alt="ChatGpt:s page  "/>
                    </div>
    
                    <div className="business-text">
                        <p>Business</p>
                        <h3>How To Implement ChatGpt In Your Projects</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                    </div>

                </div>

                <div className="content-box">
                    <div className="article-img">
                        <img src={book_13mar} alt="CSS books"/>
                    </div>
    
                    <div className="business-text">
                        <p>Business</p>
                        <h3>How Guide To Support Modern CSS Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                    </div>

                </div> 

                
            </div>
            
            <div className="dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>                
            </div> 
        </div>  

    </section>

  )


}

export default ArticleNews