import React from 'react'
import './CustomerReviews.css'

function CustomerReviews() {
  return (
    <div className="comment-card">
        <div className="comment-wrapper">
            <div className="comment-rating">
                <i class='bx bxs-star' ></i>
                <p>4.6</p>
            </div>
            <div className="customer-name">
                <p>customer name</p>
            </div>
            <div className="comment-content">
                <p>This product is really good</p>
            </div>
        </div>
    </div>
  )
}

export default CustomerReviews
