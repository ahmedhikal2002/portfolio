import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllComponents from './AllComponents';
import './App.css'
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<AllComponents />} />
                <Route path="/contact" element={<Contact />}  />
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
