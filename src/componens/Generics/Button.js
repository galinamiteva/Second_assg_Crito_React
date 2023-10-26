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