import React from 'react';
import smile_25mar from '../assets/images/Smile_25_mar.png';
import article_17mar from '../assets/images/article_17_mar.png';
import book_13mar from '../assets/images/Book_13mar.png';

const ArticleNews = () => {

    
  return (
    <section class="article">
        <div class="container">


            <div class="article-title">
                <div class="container-title">                
                    <h5 class="red-text">Article & News</h5>
                    <h2 class="title"> Get Every Single Articles & News </h2>
                </div>

                <div class="article-button">            
                    <a href="/" class="button-beige">Browse Articles <i class="fa-solid fa-arrow-up-right-dots"></i></a>
                </div>
                <div class="article-button-mobile">            
                    <a href="/" class="button-beige">Browse Articles <i class="fa-solid fa-arrow-up-right-dots"></i></a>
                </div>
                
            </div>
        
                
            <div class="article-content">

                <div class="content-box">
                    <div class="article-img">

                    <img src={smile_25mar} alt="smiling woman "/>
                    </div>
    
                    <div class="business-text">
                        <p>Business</p>
                        <h3>How To Use Digitalization In The Classroom</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                    </div>

                </div>

                <div class="content-box">
                    <div class="article-img">
                        
                        <img src={article_17mar} alt="ChatGpt:s page  "/>
                    </div>
    
                    <div class="business-text">
                        <p>Business</p>
                        <h3>How To Implement ChatGpt In Your Projects</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                    </div>

                </div>

                <div class="content-box">
                    <div class="article-img">
                        <img src={book_13mar} alt="CSS books"/>
                    </div>
    
                    <div class="business-text">
                        <p>Business</p>
                        <h3>How Guide To Support Modern CSS Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                    </div>

                </div> 

                
            </div>
            
            <div class="dots">
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