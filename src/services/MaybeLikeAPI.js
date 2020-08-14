import React, { Component } from 'react'
import axios from 'axios'
import { MaybeLikeCard } from '../components/MaybeLikeCard'

export default class MaybeLikeAPI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: []
        }
    };

    componentDidMount() {
        for (let x = 0; x < 3; x++) {
            let el = Math.floor(Math.random() * this.urlList.length);
            axios.get(this.urlList[el])
                .then(res => {
                    const service = res.data[Math.floor(Math.random() * res.data.length)];
                    this.setState({ services: [...this.state.services, service] })
                })
            this.urlList.splice(el, 1);
        }
    };

    urlList = [
        'https://api.npoint.io/cef0bf8341dd206787a2',
        "https://api.npoint.io/c1bd0d54cb63250a88db",
        "https://api.npoint.io/f5949de330819643a857",
        "https://api.npoint.io/0435b0b7acec2e2840ef",
        "https://api.npoint.io/67ba46580a49d39c888b",
        "https://api.npoint.io/c6b9578b9b4b83ea3310",
        "https://api.npoint.io/59a585666248ffc7c403",
        "https://api.npoint.io/7418de77e3183bd866ce",
        "https://api.npoint.io/d3abcf86561cdf2b30d8",
        "https://api.npoint.io/8ec99a1150e771d8b467",
        "https://api.npoint.io/bc4301390f6c6d793e3d",
        "https://api.npoint.io/552fb358d307533a4b39",
        "https://api.npoint.io/00ff321e8b059dee9532",
        "https://api.npoint.io/eb9c5df8755d7192355a",
        "https://api.npoint.io/1da2c2d50539b2041d59",
        "https://api.npoint.io/31da195ebc9b8f6ad808",
        "https://api.npoint.io/bb73c20999a95bf447d2",
        "https://api.npoint.io/35b4142aa1feb1a2c4ff"
    ];

    render() {
        return (
            <div className="maybeLike-container">
                {this.state.services.map((services, index) =>
                    <MaybeLikeCard
                        key={index}
                        nombre={services.nombre}
                        url={
                            services.nombre
                                .replace(/\w\S*/g,
                                    (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }
                                )
                                .replace(/ /g, "")
                        }
                        descripcion={services.descripcion}
                        imageDir={services.imageDir}
                    />
                )}
            </div>
        )
    }
}
