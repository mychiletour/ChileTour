import React from 'react';
import ContactForm from '../services/ContactAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook, faCcVisa, faCcAmex, faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Faq } from './Faq';

const Fooder = () => {
    return (
        <div>
            <hr />
            <h1 className="contact-title">Contáctanos</h1>
            <div className="contact-container">
                <ContactForm />
                <p> — o — </p>
                <div>
                    <div className="networks-container">
                        <a id="item--whatsapp" href="https://wa.me/56996230278?" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
                        <a id="item--facebook" href="https://www.facebook.com/MyChileTour/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a id="item--instagram" href="https://www.instagram.com/mychiletour/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a id="item--email" href="mailto:mychiletour@gmail.com" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
                </div>
            </div>
            <div className="payment-container">
                <h4>Puedes pagar los servicios con Tarjeta de crédito o con efectivo (Aceptamos Pesos Chilenos y Dólares!)</h4>
                <div>
                    <FontAwesomeIcon className="payment-item" icon={faCcVisa} />
                    <FontAwesomeIcon className="payment-item" icon={faCcMastercard} />
                    <FontAwesomeIcon className="payment-item" icon={faCcAmex} />
                </div>
            </div>
            <Faq />
            <div className="creditos">© 2017 - Diseñado por <a href="https://kevincastle.github.io/Portfolio/" rel="noopener noreferrer" target="_blank">KevinCastle</a>.</div>
        </div>
    )
}

export default Fooder
