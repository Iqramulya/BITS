import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import AdminNav from '../../admin/AdminNav'

const Layout = () => {
    return (
        <>
          {
          location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header />
          }
          <div>
            <Routers/>
          </div>
          <Footer />
        </>
    )
}

export default Layout
