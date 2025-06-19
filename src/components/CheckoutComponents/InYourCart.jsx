import React from 'react'
import './InYourCart.css'

function InYourCart() {
  return (
    <div className="checkout-product-container">
        <div className="checkout-product-image">
            <img src="case.png" alt="" />
        </div>
        <div className="checkout-product-detail">
            <h1>PC Case ATX Size</h1>
            <p>Quantity: 1</p>
            <h1>Rp 920.000</h1>
        </div>
    </div>
  )
}

export default InYourCart
