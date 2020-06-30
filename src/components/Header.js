import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className="header-background">
                <img className="header-logo" src={process.env.PUBLIC_URL + "/images/Header/chiletour.png"} alt="" />
                <p> MY CHILE TOUR</p>
            </div>
            <div className="header-nav">
                <div className="header-nav-item">
                    <p className="item">Santiago</p>
                    <p className="item">Viñedos</p>
                    <p className="item">Centros de Ski</p>
                    <p className="item">Playas</p>
                    <p className="item">Entretenimientos</p>
                </div>
                <div className="header-nav-item--right">
                    
                    <p className="item"> <FontAwesomeIcon icon={faWhatsapp} />+56 996 230 278</p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className="item">pedropabloopazo@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Header
