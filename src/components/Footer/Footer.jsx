import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <section className="footer-section">
        <div className="footer-container">
            <div className="footer-row1">
                <div className="footer-column1">
                    <div className="footer-logo">
                        <img src='bits.svg' alt="" />
                        <h1>BITS</h1>
                    </div>
                    {/* <div className="footer-social-media">
                        <a href=""><i class='bx bxl-twitter' ></i></a>
                        <a href=""><i class='bx bxl-facebook' ></i></a>
                        <a href=""><i class='bx bxl-instagram-alt' ></i></a>
                        <a href=""><i class='bx bxl-github' ></i></a>
                    </div> */}
                </div>
                <div className="footer-column2">
                    <p>GET HELP</p>
                    <ul>
                        <li><a href="">Order Status</a></li>
                        <li><a href="">Delivery</a></li>
                        <li><a href="">Returns</a></li>
                        <li><a href="">Payment Options</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-column3">
                    <p>ABOUT BITS</p>
                    <ul>
                        <li><a href="">News</a></li>
                        <li><a href="">Carees</a></li>
                        <li><a href="">Investors</a></li>
                        <li><a href="">Sustainability</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-row2">
                <div className="footer-column1">
                    <a href=""><i class='bx bxs-map' ></i>Indonesia</a>
                    <p>&#169; 2023 BITS, Inc. All Rights Reserved</p>
                </div>
                <div className="footer-column2">
                    <a href="">Terms of Sale</a>
                    <a href="">Terms of Use</a>
                    <a href="">BITS Privacy Policy</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
