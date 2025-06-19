import React from 'react'
import './OrderSummary.css'

function OrderSummary() {
  return (
    <div className="order-summary-detail">
        <p className='order-summary-title'>Order Summary</p>
        <div className="order-summary-price-detail">
            <div className="subtotal">
                <div className="subtotal-row1">
                    <p>Subtotal</p>
                    <p>Rp 920.000</p>
                </div>
                <div className="subtotal-row2">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
            </div>
            <div className="total">
                <h1>Total</h1>
                <h1>Rp 920.000</h1>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary
