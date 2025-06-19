import React from 'react'
import '../styles/CheckoutConfirm.css'
import { useNavigate } from 'react-router-dom'
import OrderSummary from '../components/CartComponents/OrderSummary';
import InYourCart from '../components/CheckoutComponents/InYourCart';

function CheckoutConfirm() {
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
        <div className="confirm-section">
            <div className="confirm-content-left">
                    <div className="shipping-block">
                        <h1>01. Shipping</h1>
                        <i class='bx bx-check'></i>
                    </div>
                    <div className="payment-block">
                        <h1>02 Payment</h1>
                        <i class='bx bx-check'></i>
                    </div>
                    <div className="confirm-wrapper">
                        <h1 className='order-summary-title'>03. Order Summary</h1>
                        <div className="confirm-order-summary">
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
                        <div className="order-summary-button">
                            <button onClick={()=>navigate("/shipping")}>Confirm</button>
                        </div>
                    </div>
            </div>
            <div className="confirm-content-right">
                <OrderSummary/>
                <h1 className='in-your-cart'>In Your Cart</h1>
                <InYourCart/>
            </div>
        </div>
    </section>
  )
}

export default CheckoutConfirm
