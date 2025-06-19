import React from 'react'
import '../styles/CheckoutShipping.css'
import { useNavigate } from 'react-router-dom'
import OrderSummary from '../components/CartComponents/OrderSummary'
import InYourCart from '../components/CheckoutComponents/InYourCart'

const CheckoutShipping = () => {
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
            <div className="shipping-content">
                <div className="shipping-content-left">
                    <h1 className='shipping-title'>01. Shipping</h1>
                    <div className="shipping-form">
                        <div className="shipping-address-wrapper">
                            <div className="shipping-address-desc">
                                <p className='username'>rhayyan zhakhi</p>
                                <p className='phone-number'>085395257703</p>
                                <p className='email-address'>rhayyanzhakhi@gmail.com</p>
                                <p className='address'>BTN. Bulurokeng Permai Blok C2 No 4</p>
                            </div>
                            <div className="change-address-link">
                                <a href="" onClick={()=>navigate("/edit-profile")}>Change Address</a>
                            </div>
                        </div>
                        <div className="shipping-button">
                            <button className="continue-button" onClick={()=>navigate("/payment")}>Continue</button>
                        </div>
                    </div>
                    <div className="payment-block">
                        <h1>02. Payment</h1>
                    </div>
                    <div className="confirm-block">
                        <h1>03. Confirm</h1>
                    </div>
                </div>
                <div className="shipping-content-right">
                    <OrderSummary/>
                    <h1 className='in-your-cart'>In Your Cart</h1>
                    <InYourCart/>
                </div>
            </div>
        </section>
    )
}

export default CheckoutShipping
