import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../logo.webp'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='pb-1'>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='nav-end'>
                        <Nav className='nav-style pb-2'>
                            <CustomLink to='/'>Home</CustomLink>
                            <CustomLink to='/restaurant'>Restaurant</CustomLink>
                            <CustomLink to='/about'>About Us</CustomLink>
                            <CustomLink to='/contact'>Contact Us</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;