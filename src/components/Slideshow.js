// import React from 'react'

// const folderDir = process.env.PUBLIC_URL + '/images/';

// class Slideshow extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//         };


//         this.images = [
//             {
//                 original: folderDir + this.props.imageDir + "/1.jpg"
//             },
//             {
//                 original: folderDir + this.props.imageDir + "/2.jpg"
//             },
//             {
//                 original: folderDir + this.props.imageDir + "/3.jpg"
//             },
//         ];
//     };

//     render() {
//         return (
//             <ImageGallery
//                 items={this.images}
//                 autoPlay={true}
//                 showBullets={true}
//                 showThumbnails={false}
//                 showFullscreenButton={false}
//             />
//         );
//     }
// }

// export default Slideshow;



// https://www.npmjs.com/package/react-image-gallery

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
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={folderDir + props.imageDir + "/3.jpg"}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slideshow


