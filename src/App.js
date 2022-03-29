import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div className='overflow-hidden'>
            <Header></Header>
            <Routes>
                <Route></Route>
            </Routes>
        </div>
    );
};

export default App;


