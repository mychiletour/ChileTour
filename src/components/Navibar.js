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
                        <NavLink className="navlink-item" to="/SantiagoTours">Tours por Santiago</NavLink>
                    </NavDropdown>
                    <NavDropdown className="mr-5" title="Viñedos" id="collasible-nav-dropdown">
                        <NavLink className="navlink-item" to="/ValleMaipo">Valle del Maipo</NavLink>
                        <NavLink className="navlink-item" to="/ValleCasablanca">Valle de Casablanca</NavLink>
                        <NavLink className="navlink-item" to="/ValleColchagua">Valle de Colchagua</NavLink>
                    </NavDropdown>
                    <NavDropdown className="mr-5" title="Centros de Ski" id="collasible-nav-dropdown">
                        <NavLink className="navlink-item" to="/ValleNevado">Valle Nevado</NavLink>
                        <NavLink className="navlink-item" to="/Farellones">Farellones</NavLink>
                        <NavLink className="navlink-item" to="/ElColorado">El Colorado</NavLink>
                        <NavLink className="navlink-item" to="/LaParva">La Parva</NavLink>
                        <NavLink className="navlink-item" to="/Portillo">Portillo</NavLink>
                    </NavDropdown>
                    <NavDropdown className="mr-5" title="Playas y Cruceros" id="collasible-nav-dropdown">
                        <NavLink className="navlink-item" to="/Valparaiso">Viña del Mar y Valparaíso</NavLink>
                        <NavLink className="navlink-item" to="/IslaNegra">Isla Negra</NavLink>
                        <NavLink className="navlink-item" to="/Cruceros">Cruceros</NavLink>
                    </NavDropdown>
                    <NavDropdown className="mr-5" title="Entretenimientos" id="collasible-nav-dropdown">
                    <NavLink className="navlink-item" to="/Monticello">Casino Sun Monticello</NavLink>
                    <NavLink className="navlink-item" to="/EnjoySantiago">Casino Enjoy Santiago</NavLink>
                    <NavLink className="navlink-item" to="/BaliHai">Cena Show Bali Hai</NavLink>
                    <NavLink className="navlink-item" to="/AutosAntiguos">Museo de Autos Antiguos</NavLink>
                    <NavLink className="navlink-item" to="/Safari">Parque Safari</NavLink>
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
