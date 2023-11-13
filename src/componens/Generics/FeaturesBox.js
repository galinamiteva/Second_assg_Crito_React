import React from 'react'

const FeaturesBox = ({title, description, icon, alt}) => {
  
  return (

    
    <div className="feature-grid" alt={alt}>
        <div>
            <i className={icon}></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default FeaturesBox