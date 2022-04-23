import React from 'react';
import DiscountCarosul from '../DiscountCarosul/DiscountCarosul';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import FeaturedProducts from '../Featured-Products/FeaturedProducts';
import HomeProducts from '../Home-Products/HomeProducts';
import HomeBanner from '../HomeNavBar/HomeBanner';
import ServiceSystem from '../ServiceSystem/ServiceSystem';

const Home = () => {
    return (
        <div>
          
            <HomeProducts></HomeProducts>
            <FeaturedProducts></FeaturedProducts>
            <DiscountCarosul></DiscountCarosul>
            <DiscountOffer></DiscountOffer>
            <ServiceSystem></ServiceSystem>
        </div>
    );
};

export default Home;