import React from 'react';
import { Link } from 'react-router-dom';

const NotAvailAble = () => {
    return (
        <div className='text-center mt-5'>
            <h2>This page is  Not AvailAble</h2>
            <h1 className='mb-4'>404 </h1>
            <Link to='/'><button className='btn btn-warning'>Back Home</button></Link>

        </div>
    );
};

export default NotAvailAble;