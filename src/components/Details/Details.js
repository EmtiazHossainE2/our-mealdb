import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { detailsId } = useParams()
    const [detail, setDetail] = useState({})
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailsId}`)
            .then(res => res.json())
            // .then(data => console.log(data.meals))
            .then(data => setDetail(data.meals[0]))
    }, [detailsId])
    return (
        <div>
            <div className="row container my-5">
                <div className="col-md-6">
                    <img className='w-100  m-auto  rounded p-1' src={detail.strMealThumb} alt="" />
                </div>
                <div className="col-lg-6  d-flex  justify-content-center  ">
                    <div className='mt-3'>
                        <h2 >Name : {detail.strMeal}</h2>
                        <h5 className='my-3'>Category : {detail.strCategory}</h5>
                        <h5>Location : {detail.strArea}</h5>
                        <p className='my-3'>Ingredient : {detail.strIngredient5}</p>
                        <p><strong>Description :</strong> {detail.strInstructions}</p>
                        <p><small>Tags : {detail.strTags}</small></p>
                        <button className='btn btn-warning'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;