import React from 'react'


const Button = ({text, url, theme}) => {
  return (
    <a href={url} className={theme}>
        {text}
        <i className="fa-solid fa-arrow-up-right-dots"></i>
      
    </a>
  )
}

export default Button 






/* import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({theme, url, text}) => {

    const getButtonClassName = () => {
        switch(theme) {
            case "yellow":
                return 'button-yellow'

            case 'black':
                return 'button-black'

            case 'transparent':
                return 'button-beige'
            
            default:
                return 'btn-transparent'
        }

    }
  return (
    <Link className={getButtonClassName()} to={url}>{text}<i className="fa-solid fa-arrow-up-right-dots"></i></Link>
  )
}

export default Button  */










/* import React from 'react'
import { NavLink } from 'react-router-dom' 

const Button = ({text, url, theme}) => {
  return (
    <NavLink to={url} className={theme}>
        {text}
        <i className="fa-solid fa-arrow-up-right-dots"></i>
      
    </NavLink>
  )
}

export default Button  */