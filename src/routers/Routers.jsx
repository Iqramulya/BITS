import { Routes, Route, Navigate } from 'react-router-dom'

import React from 'react'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import WishList from '../pages/WishList'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import ChangePassword from '../components/ProfileComponents/ChangePassword'
import EditProfile from '../components/ProfileComponents/EditProfile'
import CheckoutConfirm from '../pages/CheckoutConfirm'
import CheckoutPayment from '../pages/CheckoutPayment'
import CheckoutShipping from '../pages/CheckoutShipping'
import Product from '../admin/Product'
import AddProduct from '../admin/AddProduct'
import Orders from '../admin/Orders'
import UpdateProduct from '../admin/UpdateProduct'
import Dashboard from '../admin/Dashboard'

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='shop/:id' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='wishlist' element={<WishList />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />
            <Route path='change-password' element={<ChangePassword />} />
            <Route path='edit-profile' element={<EditProfile />} />
            <Route path='confirm' element={<CheckoutConfirm />} />
            <Route path='payment' element={<CheckoutPayment />} />
            <Route path='shipping' element={<CheckoutShipping />} />

            <Route path='dashboard' element={<Dashboard />} />
            <Route path='dashboard/products' element={<Product />} />
            <Route path='dashboard/add-product' element={<AddProduct />} />
            <Route path='dashboard/orders' element={<Orders />} />
            <Route path='dashboard/product/update-product' element={<UpdateProduct />} />

        </Routes>
    )
}

export default Routers
