import React from 'react'
import AdBanner from '../components/HomeComponents/AdBanner/AdBanner'
import SuperSaleBanner from '../components/HomeComponents/AdBanner/SuperSaleBanner'
import ServiceBanner from '../components/HomeComponents/AdBanner/ServiceBanner'
import NewProduct from '../components/HomeComponents/ProductList/NewProduct'
import Recommendation from '../components/HomeComponents/ProductList/Recommendation'


const Home = () => {
    return (
        <div>
            <AdBanner/>
            <SuperSaleBanner/>
            <NewProduct/>
            <Recommendation/>
            <ServiceBanner/>
        </div>
    )
}

export default Home
