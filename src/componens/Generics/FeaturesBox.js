import React from 'react'

const FeaturesBox = ({title, description, icon, url}) => {
  return (

    
    <a className="feature-grid" href={url}>
        <div>
            <i className={icon}></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </a>
  )
}

export default FeaturesBox