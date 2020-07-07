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
                        <p>Valle Nevado</p>
                        <p>Farellones</p>
                        <p>El Colorado</p>
                        <p>La Parva</p>
                        <p>Portillo</p>
                    </NavDropdown>
                    <NavDropdown className="mr-5" title="Playas y Cruceros" id="collasible-nav-dropdown">
                        <p>Viña del Mar y Valparaiso</p>
                        <p>Isla Negra</p>
                        <p>Cruceros</p>
                    </NavDropdown>
                    <NavDropdown className="mr-5" title="Entretenimientos" id="collasible-nav-dropdown">
                        <p>Casino Sun Monticello</p>
                        <p>Casino Enjoy Santiago</p>
                        <p>Cena Show Bali Hai</p>
                        <p>Museo de Autos Antiguos</p>
                        <p>Parque Safari</p>
                    </NavDropdown>

                </Nav>
                <Nav>
                    <Nav.Link className="mr-5" id="item--whatsapp" href="#deets"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</Nav.Link>
                    <Nav.Link className="mr-auto" id="item--email" href="#memes"><FontAwesomeIcon icon={faEnvelope} /> pedropabloopazo@gmail.com</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default Navibar
