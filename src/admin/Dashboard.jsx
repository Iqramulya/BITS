import React from 'react'
import '../styles/Dashboard.css'
// import { Container, Row, Col } from 'reactstrap'

const Dashboard = () => {
    return (
        <>
        <section className="home-section">
            <div className="home-section-title">
                <h1>DASHBOARD</h1>
            </div>
            <div className="home-dashboard">
                <div className="total-sales">
                    <h1>TOTAL PENJUALAN</h1>
                    <h3>100</h3>
                </div>
                <div className="total-order">
                    <h1>TOTAL PESANAN</h1>
                    <h3>100</h3>
                </div>
                <div className="total-product">
                    <h1>TOTAL PRODUK</h1>
                    <h3>100</h3>
                </div>
                <div className="total-buyers">
                    <h1>TOTAL PEMBELI</h1>
                    <h3>100</h3>
                </div>
            </div>
        </section>
        </>
    )
}

export default Dashboard
