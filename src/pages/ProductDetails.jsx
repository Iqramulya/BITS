import React from 'react'
import '../styles/ProductDetails.css'
import CustomerReviews from '../components/CommentComponents/CustomerReviews'
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {
    const navigate = useNavigate();
    return (
        <section className="product-details-section">
            <div className="product-detail-container">
                <div className="product-detail-content">
                    <div className="product-detail-content-left">
                        <div className="product-detail-images">
                            <div className="main-image">
                                <img src="/case.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="product-detail-content-right">
                        <div className="product-desc">
                            <div className="product-desc-row1">
                                <h1>PC Case ATX Size</h1>
                                <div className="product-rating">
                                    <i class='bx bxs-star' ></i>
                                    <p>4.9</p>
                                </div>
                            </div>
                            <div className="product-desc-row2">
                                <h1>Rp 950.000</h1>
                                <p>Stock : <span>8</span></p>
                            </div>
                            <div className="product-desc-row3">
                                <p>The H510 Elite compact ATX mid-tower is perfect for your RGB build. Behind the flush-mounted, tempered glass front panel, you’ll discover our renowned Aer RGB 2 fans keeping your components brilliantly cool. Well-engineered airflow, removable radiator mounting bracket, multiple fan filters, vertical GPU mount.</p>
                            </div>
                        </div>
                        <div className="product-desc-button">
                            <button className="add-to-cart" onClick={()=>navigate("/cart")}>Add to Cart <i class='bx bx-cart'></i></button>
                            <button className="add-to-wishlist" onClick={()=>navigate("/wishlist")}><i class='bx bx-heart' ></i></button>
                            <button className="chat-button" onClick={()=>navigate("/chat-admin")}><i class='bx bx-message-minus' ></i></button>
                        </div>
                    </div>
                </div>
                <div className="product-reviews">
                    <h1>Customer Reviews</h1>
                    <CustomerReviews />
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
