import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../logo.webp'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end '>
                        <Nav className='nav-style'>
                            <CustomLink className='pb-5' to='/'>Home</CustomLink>
                            <CustomLink className='pb-5' to='/restaurant'>Restaurant</CustomLink>
                            <CustomLink className='pb-5' to='/about'>About Us</CustomLink>
                            <CustomLink className='pb-5' to='/contact'>Contact Us</CustomLink>
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