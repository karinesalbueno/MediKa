import React from 'react';
import './index.css'

const Footer = (props) => {
    return (
        <div className='footer'>
          <label htmlFor="">valor total: {props.sumValues}</label>
        </div>
    )
}

export default Footer
