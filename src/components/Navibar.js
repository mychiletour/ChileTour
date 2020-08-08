import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navibar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle className="w-100 h-150" aria-controls="basic-navbar-nav">MENU</Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown className="mr-5" title="Santiago" id="collasible-nav-dropdown">
                        <NavLink className="navlink-item" exact to="/ChileTour">Encargos y Traslados</NavLink>
                        <NavLink className="navlink-item" to="/ChileTour/SantiagoTours">Tours por Santiago</NavLink>
                    </NavDropdown>
                    <NavDropdown className="mr-5" title="Viñedos" id="collasible-nav-dropdown">
                        <NavLink className="navlink-item" to="/ChileTour/ValleMaipo">Valle del Maipo</NavLink>
                        <NavLink className="navlink-item" to="/ChileTour/ValleCasablanca">Valle de Casablanca</NavLink>
                        <NavLink className="navlink-item" to="/ChileTour/ValleColchagua">Valle de Colchagua</NavLink>
                    </NavDropdown>
                    <NavDropdown className="mr-5" title="Centros de Ski" id="collasible-nav-dropdown">
                        <NavLink className="navlink-item" to="/ChileTour/ValleNevado">Valle Nevado</NavLink>
                        <NavLink className="navlink-item" to="/ChileTour/Farellones">Farellones</NavLink>
                        <NavLink className="navlink-item" to="/ChileTour/ElColorado">El Colorado</NavLink>
                        <NavLink className="navlink-item" to="/ChileTour/LaParva">La Parva</NavLink>
                        <NavLink className="navlink-item" to="/ChileTour/Portillo">Portillo</NavLink>
                    </NavDropdown>
                    <NavDropdown className="mr-5" title="Playas y Cruceros" id="collasible-nav-dropdown">
                        <NavLink className="navlink-item" to="/ChileTour/Valparaiso">Viña del Mar y Valparaíso</NavLink>
                        <NavLink className="navlink-item" to="/ChileTour/IslaNegra">Isla Negra</NavLink>
                        <NavLink className="navlink-item" to="/ChileTour/Cruceros">Cruceros</NavLink>
                    </NavDropdown>
                    <NavDropdown className="mr-5" title="Entretenimientos" id="collasible-nav-dropdown">
                    <NavLink className="navlink-item" to="/ChileTour/Monticello">Casino Sun Monticello</NavLink>
                    <NavLink className="navlink-item" to="/ChileTour/EnjoySantiago">Casino Enjoy Santiago</NavLink>
                    <NavLink className="navlink-item" to="/ChileTour/BaliHai">Cena Show Bali Hai</NavLink>
                    <NavLink className="navlink-item" to="/ChileTour/AutosAntiguos">Museo de Autos Antiguos</NavLink>
                    <NavLink className="navlink-item" to="/ChileTour/Safari">Parque Safari</NavLink>
                    </NavDropdown>

                </Nav>
                <Nav>
                    <Nav.Link className="mr-5" id="item--whatsapp" href="https://wa.me/56996230278?" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</Nav.Link>
                    <Nav.Link className="mr-auto" id="item--email" href="mailto:mychiletour@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /> mychiletour@gmail.com</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default Navibar
