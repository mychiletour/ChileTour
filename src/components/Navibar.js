import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navibar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle className="w-100 h-150" aria-controls="basic-navbar-nav">MENU</Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown className="mr-5" title="Santiago" id="collasible-nav-dropdown">
                        <Link to="/">Traslados y Recepciones</Link>
                        <p>City Tour</p>
                        <p>Tour Outlets</p>
                    </NavDropdown>
                    <NavDropdown className="mr-5" title="Viñedos" id="collasible-nav-dropdown">
                        <p>Concha y Toro</p>
                        <p>Santa Rita</p>
                        <p>Cousiño Macul</p>
                        <p>Indomita</p>
                        <p>Casas del Bosque</p>
                        <p>Matetic</p>
                        <p>Loma Larga</p>
                        <p>Lapostolle</p>
                        <p>Viu Manent</p>
                        <p>Montes</p>
                        <p>Montgras</p>
                        <p>Santa Cruz</p>
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
