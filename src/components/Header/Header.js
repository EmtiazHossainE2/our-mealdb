import React, { useEffect, useState } from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../logo.webp'
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';
const Header = () => {

    const [getUser, setGetUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setGetUser(user);

            } else {
                setGetUser({})
            }
        });
    }, [])

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {

            });
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/'><img src={logo} alt="" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end '>
                        <Nav className='nav-style'>
                            <CustomLink className='pb-5' to='/'>Home</CustomLink>
                            <CustomLink className='pb-5' to='/restaurant'>Restaurant</CustomLink>
                            <CustomLink className='pb-5' to='/about'>About Us</CustomLink>
                            <CustomLink className='pb-5' to='/contact'>Contact Us</CustomLink>
                            {getUser?.uid ?
                                <CustomLink className='py-2 px-3 border border-1' to='/log-in' onClick={handleLogOut} >Log out</CustomLink>
                                :
                                <CustomLink className='py-2 px-3 border border-1' to='/log-in'>Log in</CustomLink>
                            }
                            <CustomLink className='py-2 px-3 border border-1' to='/sign-up'>Sign up</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;


// import React from 'react';
// import './Header.css'
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import CustomLink from '../CustomLink/CustomLink';
// import logo from '../../logo.webp'
// const Header = () => {
//     return (
//         <div>
//             <Navbar collapseOnSelect expand="lg" bg="dark" >
//                 <Container className='pb-1'>
//                     <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav" className='nav-end'>
//                         <Nav className=' '>
//                             <CustomLink className='text-decoration-none pe-4 pb-4' to='/'>Home</CustomLink>
//                             <CustomLink className='text-decoration-none pe-4 pb-4' to='/restaurant'>Restaurant</CustomLink>
//                             <CustomLink className='text-decoration-none pe-4 pb-4' to='/about'>About Us</CustomLink>
//                             <CustomLink className='text-decoration-none pe-4 pb-4' to='/contact'>Contact Us</CustomLink>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     );
// };

// export default Header;