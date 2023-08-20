import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo-sm-alphabg.png';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGauge } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = (e) => {
        console.log("Button Click");
        localStorage.removeItem('token');
        navigate("/login");
    };

    return (
        <Container fluid>
            <Row>
                <Col style={{display:'flex', justifyContent:'left'}}>
                    <Container className="vh-100">
                        <Row className="bg-secondary bg-gradient">
                            <Navbar>
                                <Container className="w-100">
                                  <Navbar.Brand href="#home" className="text-white">
                                    <img src={logo} alt="logo" />
                                  </Navbar.Brand>
                                </Container>
                            </Navbar>
                        </Row>
                        <Row className="bg-dark vh-100">
                            <Col>
                                <h6 className="text-white mt-2">General</h6>
                                <ListGroup className="p-0">
                                    <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faGauge} /> Dashboard</ListGroup.Item>
                                    <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faUsers} /> Customers</ListGroup.Item>
                                    <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faMoneyBillTransfer} /> Loans</ListGroup.Item>
                                </ListGroup>
                                <h6 className="text-white mt-2">Configurations</h6>
                                <ListGroup className="p-0">
                                    <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faFileContract} /> Program</ListGroup.Item>
                                    <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faBuilding} /> Company</ListGroup.Item>
                                    <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faListCheck} /> Loan Product Template</ListGroup.Item>
                                </ListGroup>
                                <h6 className="text-white mt-2">Administration</h6>
                                <ListGroup className="p-0">
                                    <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faUserGear} /> Users</ListGroup.Item>
                                    <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faGears} /> Settings</ListGroup.Item>
                                    <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faCircleInfo} /> About</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs={10}>
                    {/*Seconday Header*/}
                    <Container fluid className="w-100 mt-2">
                        <Row>
                            <Col style={{display:'flex', justifyContent:'left'}}>
                                <p className="mt-2 mb-0">Credit</p>
                            </Col>
                            <Col style={{display:'flex', justifyContent:'right'}}>
                                <p className="mt-2 mb-0">Username</p>
                            </Col>
                            <Col xs={1} style={{display:'flex', justifyContent:'right'}}>
                                <Button variant="outline-danger" size="sm" onClick={ handleLogout } >Log out</Button>
                            </Col>
                        </Row>
                        <Row>
                            <hr className="mt-2 mb-1"/>
                        </Row>
                    </Container>
                    <Container fluid className="w-100 mt-2">
                        <Row>
                            <Col>
                                <h6>Dashboard</h6>
                            </Col>
                        </Row>
                    </Container>
                    {/*Widgets*/}
                    <Container className="w-100 mt-2">
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                <Card.Body className="bg-primary bg-gradient text-white">
                                <Card.Title>103</Card.Title>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faChartLine} size="2xl" /> New Loans
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                <Card.Body className="bg-info bg-gradient text-white">
                                <Card.Title>11</Card.Title>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faCheckToSlot} size="2xl" /> For Verification
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                <Card.Body className="bg-success bg-gradient text-white">
                                <Card.Title>18</Card.Title>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faHandHoldingDollar} size="2xl" /> Collections
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                <Card.Body className="bg-warning bg-gradient text-white">
                                <Card.Title>2</Card.Title>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faCalendarPlus} size="2xl" /> Renewals
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    {/*Recent Customer Tables*/}
                    <Container className="w-100 mt-5">
                        <Row>
                            <Col>
                                <Card>
                                <Card.Header>Recent Customers</Card.Header>
                                <Card.Body>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                          <th>Customer ID</th>
                                          <th>First Name</th>
                                          <th>Middle Name</th>
                                          <th>Last Name</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>Mark</td>
                                          <td>Otto</td>
                                          <td>@mdo</td>
                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>Jacob</td>
                                          <td>Thornton</td>
                                          <td>@fat</td>
                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td colSpan={2}>Larry the Bird</td>
                                          <td>@twitter</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    {/*Recent Loans Tables*/}
                    <Container className="w-100 mt-5">
                        <Row>
                            <Col>
                                <Card>
                                <Card.Header>Recent Loans</Card.Header>
                                <Card.Body>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                        <tr>
                                          <th>Loan ID</th>
                                          <th>State</th>
                                          <th>Amount</th>
                                          <th>Encoded Date</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>Mark</td>
                                          <td>Otto</td>
                                          <td>@mdo</td>
                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>Jacob</td>
                                          <td>Thornton</td>
                                          <td>@fat</td>
                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td colSpan={2}>Larry the Bird</td>
                                          <td>@twitter</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;