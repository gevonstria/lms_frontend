import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends React.Component{
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col style={{display:'flex', justifyContent:'left'}}>
                        <Container className="vh-100">
                            <Row className="bg-dark bg-gradient">
                                <Navbar>
                                    <Container className="w-100">
                                      <Navbar.Brand href="#home" className="text-white">
                                        Tomo LMS
                                      </Navbar.Brand>
                                    </Container>
                                </Navbar>
                            </Row>
                            <Row className="bg-secondary vh-100">
                                <Col>
                                    <h6 className="text-white mt-2">General</h6>
                                    <ListGroup className="p-0">
                                        <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faUsers} /> Customers</ListGroup.Item>
                                        <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faMoneyBillTransfer} /> Loans</ListGroup.Item>
                                    </ListGroup>
                                    <h6 className="text-white mt-2">Configurations</h6>
                                    <ListGroup variant="flush" className="p-0">
                                        <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faFileContract} /> Program</ListGroup.Item>
                                        <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faBuilding} /> Company</ListGroup.Item>
                                        <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faListCheck} /> Loan Product Template</ListGroup.Item>
                                    </ListGroup>
                                    <h6 className="text-white mt-2">Administration</h6>
                                    <ListGroup variant="flush" className="p-0">
                                        <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faUserGear} /> Users</ListGroup.Item>
                                        <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faGears} /> Settings</ListGroup.Item>
                                        <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faCircleInfo} /> About</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={10} style={{display:'flex', justifyContent:'left'}}>Main here</Col>
                </Row>
            </Container>
    )}
};

export default Dashboard;