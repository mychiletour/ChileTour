import React from 'react';
import Navibar from './Navibar';

const Header = () => {
    return (
        <div>
            <div className="header-background">
                <img className="header-background__image" src={process.env.PUBLIC_URL + "/images/Header/background.jpg"} alt="" />
                <div className="header-background__container">
                    <img className="header-logo" src={process.env.PUBLIC_URL + "/images/Header/chiletour.png"} alt="" />
                    <p> MY CHILE TOUR</p>
                </div>
            </div>
            <Navibar />
        </div>
    )
}

export default Header
