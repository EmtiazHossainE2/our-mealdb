import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.webp'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="container mx-auto px-6 bg-slate-800 flex justify-between items-center p-2">
                <Link to='/'><img className='' src={logo} alt="" /></Link>
                <nav>
                    <ul className='flex text-white'>
                        <li> <CustomLink to='/'>Home</CustomLink > </li>
                        <li> <CustomLink to='/restaurant'> Restaurant </CustomLink></li>
                        <li><CustomLink to='/about'>About Us</CustomLink></li>
                        <li> <CustomLink to='/contact'>Contact us</CustomLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;