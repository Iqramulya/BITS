import React from 'react'
import './Banner1.css'

function Banner1() {
  return (
    <div className="banner-container">
        <div className="banner">
            <div className="pict1">
            <img src="case.png" alt="" />
            </div>
            <div className="content">
                <span>upto</span>
                <h3>50% off</h3>
                <p>offer ends after 5 days</p>
                <a href="#" className='btn'>view offer</a>
            </div>
            <div className="pict2">
            <img src="case.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner1
