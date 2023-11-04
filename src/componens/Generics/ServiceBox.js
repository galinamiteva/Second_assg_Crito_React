import React from 'react'
import { Link } from 'react-router-dom';

const ServiceBox = ({title, description, url}) => {
  return (
    <Link className="box" to={url}>  
                                
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="right-arrow">
            <div className='arrow-icon' ><i className="fa-solid fa-arrow-right"></i></div>
        </div>
    </Link>
  )
}

export default ServiceBox;