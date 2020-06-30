import React from 'react'
import ImageGallery from 'react-image-gallery';

const folderDir = process.env.PUBLIC_URL + '/images/';

class Slideshow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        };


        this.images = [
            {
                original: folderDir + this.props.imageDir + "/1.jpg"
            },
            {
                original: folderDir + this.props.imageDir + "/2.jpg"
            },
            {
                original: folderDir + this.props.imageDir + "/3.jpg"
            },
        ];
    };

    render() {
        return (
            <ImageGallery
                items={this.images}
                autoPlay={true}
                showBullets={true}
                showThumbnails={false}
                showFullscreenButton={false}
            />
        );
    }
}

export default Slideshow;



// https://www.npmjs.com/package/react-image-gallery
