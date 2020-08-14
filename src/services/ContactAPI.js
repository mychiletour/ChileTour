import React from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: '',
            servicio: '',
            mensaje: ''
        }
    }

    handleInputChange(e) {
        e.preventDefault();
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        console.log(this.state);
    }

    resetForm() {
        this.setState({
            nombre: '',
            apellido: '',
            email: '',
            servicio: '',
            mensaje: ''
        })
    }


    handleSubmit(e) {
        e.preventDefault()
        const { nombre, apellido, email, servicio, mensaje } = this.state
        let templateParams = {
            from_name: nombre + " " + apellido,
            from_email: email,
            subject: servicio,
            message_html: mensaje,
        }
        emailjs.send(
            'gmail',
            'template_8D8KjenP',
            templateParams,
            'user_D71raeXEyvrzVr94j7L0L'
        ).then(
            (result) => {
                console.log(result.text);
                toast.info("Su mensaje ha sido enviado con éxito!", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
                console.log("SUCCESS!", result.status, result.text);
            },
            (err) => {
                toast.error("Su mensaje no pudo ser enviado");
                console.log(err.text);
            }
        );
        this.resetForm()
    };


    render() {
        return (
            <div className="form-container">
                <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="nombre"
                                placeholder="Nombre"
                                value={this.state.nombre}
                                onChange={this.handleInputChange.bind(this)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                name="apellido"
                                placeholder="Apellido"
                                value={this.state.apellido}
                                onChange={this.handleInputChange.bind(this)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            aria-describedby="emailHelp"
                            type="email"
                            name="email"
                            placeholder="ejemplo@email.com"
                            value={this.state.email}
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAServicio">
                        <Form.Label>Servicio</Form.Label>
                        <Form.Control
                            name="servicio"
                            placeholder="Servicios que desea consultar"
                            value={this.state.servicio}
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridMensaje">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            name="mensaje"
                            placeholder="Ingrese un mensaje"
                            value={this.state.mensaje}
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">Enviar</Button>
                </Form>
                <ToastContainer />
            </div>
        )
    };
}