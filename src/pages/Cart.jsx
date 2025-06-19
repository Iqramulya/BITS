import React from 'react'
import '../styles/Cart.css'
import { useNavigate } from 'react-router-dom'
import CartProduct from '../components/CartComponents/CartProduct'
import OrderSummary from '../components/CartComponents/OrderSummary'

const Cart = () => {
    const navigate = useNavigate();
    return (
        <section className="cart-section">
            <div className="cart-wrapper">
                <h1>PRODUCT CART</h1>
            </div>
            <div className="cart-product-detail">
                <div className="cart-product-list">
                    <CartProduct/>
                </div>
                <div className="order-summary">
                    <OrderSummary/>
                    <div className="order-summary-button">
                        <button onClick={()=>navigate("/shipping")}>Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
