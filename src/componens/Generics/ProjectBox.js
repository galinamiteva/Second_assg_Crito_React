import React from 'react';
import {Link} from 'react-router-dom';

const ProjectBox = ({img, altText, title, url}) => {
  return (
    <Link className='article' to ={ url }>
        <img src={img} alt={altText}/>
        <h3>{title}</h3>
        {/* !!!!!!!!!!!!!!!!!!! LINK SERVICE */}
         {/* <a href="/">Read more <i className="fa-solid fa-arrow-up-right-dots"></i> </a> */}
         <div> Read more <i className="fa-solid fa-arrow-up-right-dots"></i> </div>

         {/* <Link to="/">Read more <i className="fa-solid fa-arrow-up-right-dots"></i> </Link>  */}

    </Link>
  )
}

export default ProjectBox