import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Restaurant from './Pages/Restaurant/Restaurant';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotAvailAble from './components/NotAvailAble/NotAvailAble';
import Details from './components/Details/Details';
import Footer from './Pages/Footer/Footer';

const App = () => {
    return (
        <div className='overflow-hidden '>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/restaurant' element={<Restaurant></Restaurant>}></Route>
                <Route path='/details/:detailsId' element={<Details></Details>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='*' element={<NotAvailAble></NotAvailAble>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default App;


