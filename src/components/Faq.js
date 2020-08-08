import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export const Faq = () => {
    return (
        <div>
            <div className="Faq-container">

                <Accordion>
                    <Card>
                        <Accordion.Toggle className="d-flex justify-content-center" as={Card.Header} variant="link" eventKey="0">
                            Preguntas Frecuentes
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Accordion>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        ¿Puedo pagar los servicios con tarjeta de crédito?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            Sí, pero no olvide habilitar su tarjeta de crédito en Chile.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                                        ¿En qué moneda puedo pagar los servicios?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            Se pueden pagar en Pesos Chilenos, Dólares Americanos o en Reales, haciendo la conversión según el tipo de cambio.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                                        ¿Cómo ubico al conductor en el aeropuerto de Santiago?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            El conductor le esperará con un letrero con su nombre y logo de la empresa.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
                                        ¿Cómo sé que la reserva está agendada?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            Su formulario de reserva le será enviado por correo confirmando el servicio.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
                                        ¿Puedo pedir un auto el mismo dia desde el aeropuerto?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            No es recommendable debido al alto movimiento de nuestros conductores, es mejor hacer la reserva anticipadamente.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    )
}
