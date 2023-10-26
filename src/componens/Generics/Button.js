import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots} from '@fortawesome/free-solid-svg-icons';

const Button = ({text, url, theme}) => {
  return (
    <a href={url} className={theme}>
        {text}
        <i className="fa-solid fa-arrow-up-right-dots"></i>
        <FontAwesomeIcon icon={faArrowUpRightDots} />
    </a>
  )
}

export default Button