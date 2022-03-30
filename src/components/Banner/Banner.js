import React from 'react';
import './Banner.css'
import pic1 from '../../images/pic1.jpg'
const Banner = () => {
    return (
        <div>
            <div className="row my-5 banner ">
                <div className="col-lg-6 mb-3">
                    <img className='w-100 m-auto ' src={pic1} alt="" />
                </div>
                <div className="col-lg-6  d-flex align-items-center justify-content-center ">
                    <div>
                        <h2>I'm Taking Pride in My Chinese Heritage by Making Hong Kong Egg Tarts</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae dolores quaerat explicabo, officiis omnis quis unde excepturi doloremque fugit expedita ipsa natus porro facilis assumenda labore? Aut, rerum debitis!</p>
                        <button className='btn btn-warning '>Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;