import React from 'react'
import '../styles/CheckoutPayment.css'
import { useNavigate } from 'react-router-dom'
import OrderSummary from '../components/CartComponents/OrderSummary';
import InYourCart from '../components/CheckoutComponents/InYourCart';

function CheckoutPayment() {
    const navigate = useNavigate();
  return (
    <section className="checkout-section">
        <div className="checkout-title">
            <h1>CHECKOUT</h1>
            <div className="back-button">
                <button onClick={()=>navigate("/cart")}>
                    <i class='bx bx-left-arrow-alt'></i>
                    <p>Back</p>
                </button>
            </div>
        </div>
        <div className="payment-section">
            <div className="payment-content-left">
                <div className="shipping-block">
                    <h1>01. Shipping</h1>
                    <i class='bx bx-check'></i>
                </div>
                <div className="payment-section-detail">
                    {/* <div className="payment-address-wrapper">
                        <div className="payment-address-desc">
                            <p>rhayyan zhakhi</p>
                            <p>BTN. Bulurokeng Permai Blok C2 No 4</p>
                            <p>90243</p>
                            <p>085395257703</p>
                        </div>
                        <div className="change-address-link">
                            <a href="" onClick={()=>navigate("/shipping")}>Change Address</a>
                        </div>
                    </div> */}
                    <div className="payment-option-wrapper">
                        <h1>Payment Option</h1>
                        <div className="payment-option">
                            <div className="cod">
                                <input className='payment-checkbox' type="checkbox" />
                                <label className='payment-label' htmlFor="">COD</label>
                            </div>
                            <div className="credit-card">
                                <input className='payment-checkbox' type="checkbox" />
                                <label className='payment-label' htmlFor="">Credit Card</label>
                            </div>
                            <div className="transfer">
                                <input className='payment-checkbox' type="checkbox" />
                                <label className='payment-label' htmlFor="">Transfer</label>
                            </div>
                        </div>
                    </div>
                    <div className="payment-option-button">
                        <button className='save-continue-button' onClick={()=>navigate("/confirm")}>Save & Continue</button>
                    </div>
                </div>
                <div className="confirm-block">
                    <h1>03. Confirm</h1>
                    <i class='bx bx-check'></i>
                </div>
            </div>
            <div className="payment-content-right">
                <OrderSummary/>
                <h1 className='in-your-cart'>In Your Cart</h1>
                <InYourCart/>
            </div>
        </div>
    </section>
  )
}

export default CheckoutPayment
