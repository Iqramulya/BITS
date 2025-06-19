import React from 'react'
import './ServiceBanner.css'

function ServiceBanner() {
  return (
    <div className="service-banner-section">
        <div className="service-banner-wrapper">
            <div className="service-banner-col1">
                <div className="col-icon">
                    <i class='bx bx-check-shield' ></i>
                </div>
                <div className="col-text">
                    <h3>Garansi Resmi</h3>
                    <p>Produk Bergaransi Resmi</p> 
                </div>
            </div>
            <div className="service-banner-col2">
                <div className="col-icon">
                    <i class='bx bx-headphone' ></i>
                </div>
                <div className="col-text">
                    <h3>Layanan Pelanggan</h3>
                    <p>Tim Kami Siap Membantu Seputar Produk</p> 
                </div>
            </div>
            <div className="service-banner-col3">
                <div className="col-icon">
                    <i class='bx bxs-discount' ></i>
                </div>
                <div className="col-text">
                    <h3>Keuntungan Belanja</h3>
                    <p>Promo dan Info Terkini Produk Terbaru</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceBanner
