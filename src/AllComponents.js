import React from 'react';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import"./AllComponents.css"
import SocialMedia from './Components/SocialMedia/SocialMedia';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Profile from './Components/Profile/Profile';

function AllComponents() {
    return (
        <div>
            <Home/>
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <SocialMedia />
        
        </div>
    );
}

export default AllComponents;
