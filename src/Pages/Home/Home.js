import React from 'react';
import Banner from '../../components/Banner/Banner';
import Products from '../../components/Products/Products';
import banner2 from '../../images/banner2.png'
const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <br />
            <img className='w-100 m-auto d-flex' src={banner2} alt="" />
            <Products></Products>

        </div>
    );
};

export default Home;