import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const folderDir = process.env.PUBLIC_URL + '/images/';


const Slideshow = (props) => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={folderDir + props.imageDir + "/1.jpg"}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={folderDir + props.imageDir + "/2.jpg"}
                        onError={(e)=>{e.target.onerror = null; e.target.src=`${folderDir + props.imageDir + '/1.jpg'}`}}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={folderDir + props.imageDir + "/3.jpg"}
                        onError={(e)=>{e.target.onerror = null; e.target.src=`${folderDir + props.imageDir + '/1.jpg'}`}}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slideshow


