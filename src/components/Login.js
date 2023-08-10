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
            error: false,
            error_message: "",
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
        let has_error = false;
        let payload = {
            "username": this.state.username,
            "password": this.state.password
        }

        this.setState({
            error: false,
            error_message: ""
        });

        // add login logic here
        fetch('http://0.0.0.0:8080/api-token-auth/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if(response.status === 400){
                console.log("response");
                has_error = true;
                this.setState({
                    error: has_error,
                    error_message: "User not found. Please check your username and password."
                });
            }else{
                return response.json();
            }
        })
        .then(data => {
            localStorage.setItem('token', data['token']);
            window.location.href = "/dashboard";
            this.setState({is_authenticated: true});
        })
        .catch(error => {
            if(!has_error){
                has_error=true;
                this.setState({
                    error: has_error,
                    error_message: "Cannot Establish Connection to Server."
                });
            }
        });    
    }

    render(){
        
        if(this.state.is_authenticated){
            return <Navigate replace to="/dashboard" />;
        }
        return (
            <Container fluid className="vh-100">
                {this.state.error &&
                    <Alert variant="danger" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 999 }}>
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                          {this.state.error_message}
                        </p>
                    </Alert>
                }
                <Row className="px-2 py-2">
                    <Col className="square border-end row align-items-center" >
                        <Form onSubmit={ this.handleSubmit } className="px-5">
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Control name="username" type="text" placeholder="Enter username" value={ this.state.username } onChange={ this.handleInputChange } required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Control name="password" type="password" placeholder="Password" value={ this.state.password } onChange={ this.handleInputChange } required/>
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