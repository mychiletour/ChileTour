import React from 'react'
import Slideshow from './Slideshow';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Badge from 'react-bootstrap/Badge'


const ItemCard = (props) => {
    return (
        <div>
            {props.incluye &&
                <div className="card-container">
                    <Card>
                        <Slideshow imageDir={props.imageDir} />
                        <Card.Body>
                            <div className="card-title--container">
                                <Card.Title className="card-title">{props.nombre}</Card.Title>
                                {props.precio && <Badge variant="primary">{props.precio} CLP</Badge>}
                            </div>
                            <Card.Text className="card-text">{props.descripcion}</Card.Text>
                            <CardDeck>
                                <Card className="card-extra w-auto">
                                    <Card.Header>Incluye</Card.Header>
                                    <Card.Body>
                                        <ul>
                                            {props.incluye.map((el, index) => <li key={index}>{el}</li>)}
                                        </ul>
                                    </Card.Body>
                                </Card>
                                <Card className="card-extra w-auto">
                                    <Card.Header>Opcional</Card.Header>
                                    <Card.Body>
                                        <ul>
                                            {props.opcional.map((el, index) => <li key={index}>{el}</li>)}
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Card.Body>
                    </Card>
                </div>
            }
        </div>
    );
};


export default ItemCard;