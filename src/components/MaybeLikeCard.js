import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const folderDir = process.env.PUBLIC_URL + '/images/';

export const MaybeLikeCard = (props) => {
    console.log(props.url);
    return (
        <Card className="card--alt">
            <Link to={`/ChileTour/${props.url}`}>
                <Card.Img variant="top" src={folderDir + props.imageDir + "/1.jpg"} />
                <Card.Body>
                    <Card.Title className="card-title--alt">{props.nombre}</Card.Title>
                    <Card.Text className="card-text--alt">{props.descripcion}</Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )


}
