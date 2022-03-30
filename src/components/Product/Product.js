import React from 'react';
import './Product.css'
const Product = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.product
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="cart  p-3 m-3 cart-container text-center">
                <img className='w-75  m-auto  rounded p-1 ' src={strMealThumb} alt="" />
                <h4>Name : {strMeal.slice(0, 15)}</h4>
                <p>{strInstructions.slice(0, 100)}</p>
                <div className="d-flex justify-content-between py-2">
                    <button className='btn btn-style'>Add to cart</button>
                    <button className='btn btn-style'>View Details</button>
                </div>
            </div>

        </div>
    );
};

export default Product;