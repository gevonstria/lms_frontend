import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const [error, setError] = useState(false);
    const [error_message, setErrorMessage] = useState(false);
    const [is_authenticated, setIsAuthenticated] = useState(false);

    console.log("function head");
    console.log(login); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin(true);
    };

    useEffect(() => {
        let login_error = false;
        console.log("USE EFFECT");
        if(login){
            let payload = {
                "username": username,
                "password": password
            };

            console.log(payload);
            fetch('http://0.0.0.0:8080/api-token-auth/', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            .then(response => {
                if(response.status === 400){
                    console.log("response");
                    login_error  = true;
                    setError(true);
                    setErrorMessage("User not found, please check your username and password.");
                }else{
                    return response.json();
                }
            })
            .then(data => {
                localStorage.setItem('token', data['token']);
                navigate("/dashboard");
                setIsAuthenticated(true);
            })
            .catch(error => {
                console.log(error);
                if(!login_error){
                    setError(true);
                    setErrorMessage("Cannot establish connection to server. Please contact your System Administrator.");
                }
            });
            setLogin(false);
        }
    }, [login])

    return(
        <Container fluid className="vh-100">
            { error &&
                <Alert variant="danger" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 999 }}>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                      {error_message}
                    </p>
                </Alert>

            }
            <Row className="px-2 py-2">
                <Col className="square border-end row align-items-center" >
                    <Form onSubmit={ handleSubmit } className="px-5">
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control name="username" type="text" size="sm" placeholder="Enter username" value={ username } onChange={(e) => setUsername(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control name="password" type="password" size="sm" placeholder="Password" value={ password } onChange={(e) => setPassword(e.target.value)} required/>
                        </Form.Group>
                        <Button className="w-100" variant="primary" size="sm" type="submit">
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
    )
}

export default Login;