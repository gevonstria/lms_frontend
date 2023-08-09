import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import logo from '../assets/logo.png'
import { Navigate } from "react-router-dom";

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            is_authenticated: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);

        let payload = {
            "username": this.state.username,
            "password": this.state.password
        }

        // add login logic here
        fetch('http://0.0.0.0:8080/api-token-auth/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data['token']);
            localStorage.setItem('token', data['token']);
            // window.location.href = "/dashboard";
            this.setState({is_authenticated: true});
        })
        .catch(error => console.error(error));    
    }

    render(){
        if(this.state.is_authenticated){
            return <Navigate replace to="/dashboard" />;
        }
        return (
        <Container fluid className="vh-100">
            <Row className="px-2 py-2">
                <Col className="square border-end row align-items-center" >
                    <Form onSubmit={ this.handleSubmit } className="px-5">
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control name="username" type="text" placeholder="Enter username" value={ this.state.username } onChange={ this.handleInputChange } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control name="password" type="password" placeholder="Password" value={ this.state.password } onChange={ this.handleInputChange } />
                        </Form.Group>
                        <Button className="w-100" variant="primary" type="submit">
                            Submit
                        </Button>
                        <p className="small mt-2">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                    </Form>
                </Col>
                <Col xs={8} style={{display:'flex', justifyContent:'center'}}>
                    <img src={logo} alt="logo" />
                </Col>
            </Row>
        </Container>
    )}
}

export default Login;