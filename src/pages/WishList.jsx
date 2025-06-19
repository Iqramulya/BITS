import React from 'react'
import '../styles/Wishlist.css'
import WishlistRecommendation from '../components/HomeComponents/ProductList/WishlistRecommendation'

const WishList = () => {
    return (
        <section className="wishlist-section">
            <div className="wishlist-title">
                <h1>WISHLIST</h1>
                <div className="wishlist-product-list">
                    <p>WISHLIST PRODUCT HERE!</p>
                </div>
            </div>
            <div className="wishlist-product-wrapper">
            </div>
            <WishlistRecommendation/>
        </section>
    )
}

export default WishList
