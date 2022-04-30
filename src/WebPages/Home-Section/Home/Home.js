import React from 'react';
import DiscountCarosul from '../DiscountCarosul/DiscountCarosul';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import FeaturedProducts from '../Featured-Products/FeaturedProducts';
import HomeProducts from '../Home-Products/HomeProducts';
import HomeBanner from '../HomeNavBar/HomeBanner';
import MediaPartner from '../Media-Partner/MediaPartner';
import ServiceSystem from '../ServiceSystem/ServiceSystem';
import Project from './Project/Project';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeProducts></HomeProducts>
            <FeaturedProducts></FeaturedProducts>
            <DiscountCarosul></DiscountCarosul>
            <DiscountOffer></DiscountOffer>
            <Project></Project>
            <ServiceSystem></ServiceSystem>
            <MediaPartner></MediaPartner>
        </div>
    );
};

export default Home;