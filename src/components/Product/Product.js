import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const { strMeal, strMealThumb, strInstructions, idMeal } = props.product
    // let navigate = useNavigate()
    // const showDetails = () => {
    //     navigate('/detail/' + idMeal)
    // }
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="cart  p-3 m-3 cart-container text-center">
                <img className='w-75  m-auto  rounded p-1 ' src={strMealThumb} alt="" />
                <h4>Name : {strMeal.slice(0, 15)}</h4>
                <p>{strInstructions.slice(0, 100)}</p>

                <div className="d-flex justify-content-between py-4">
                    <button className='btn btn-style'>Add To Cart</button>
                    {/* <button className='btn btn-style' onClick={showDetails}>View Details</button> */}
                    <Link to={'/details/' + idMeal}><button className='btn btn-style'>View Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Product;