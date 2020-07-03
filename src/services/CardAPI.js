import React from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';

export default class CardAPI extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            services: []
        }
    }

    componentDidMount() {
        axios.get(this.props.url)
            .then(res => {
                const services = res.data;
                this.setState({ services });
            })
    }

    render() {
        return (
            <div>
                <section>
                    {this.state.services.map((services, index) =>
                        <ItemCard
                            key={index}
                            nombre={services.nombre}
                            descripcion={services.descripcion}
                            incluye={services.incluye}
                            opcional={services.opcional}
                            imageDir={services.imageDir}
                        />
                    )}
                </section>
            </div>

        )
    }
}
