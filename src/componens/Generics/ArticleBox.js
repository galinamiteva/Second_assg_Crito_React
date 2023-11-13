import React from 'react'

const ArticleBox = ({title, description, img, alt}) => {

  return (
    <div className="content-box">
                    <div className="article-img">

                    <img src={img} alt={alt}/>
                    </div>
    
                    <div className="business-text">
                        <p>Business</p>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>

                </div>
  )
}

export default ArticleBox