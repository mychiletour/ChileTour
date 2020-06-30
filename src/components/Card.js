import React from 'react'
import Slideshow from './Slideshow';
 

const Card = (props) => {
    return (
        <div>
            {props.incluye &&
                <div>
                <p>{props.nombre}</p>
                <Slideshow imageDir={props.imageDir}/>
                    <div>
                        <p>{props.descripcion}</p>
                        <p>Incluye</p>
                        <ul>
                            {props.incluye.map((el, index) => <li key={index}>{el}</li>)}
                        </ul>
                        <p>Opcional</p>
                        <ul>
                            {props.opcional.map((el, index) => <li key={index}>{el}</li>)}
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};


export default Card;