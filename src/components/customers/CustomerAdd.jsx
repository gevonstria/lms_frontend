import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo-sm-alphabg.png';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
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
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const CustomerAdd = () => {

    const navigate = useNavigate();

    // Personal Details
    const [firstname, setFirstName] = useState("");
    const [middlename, setMiddleName] = useState("");
    const [lastname, setLastName] = useState("");
    const [address_street, setAddressStreet] = useState("");
    const [address_municipality, setAddressMunicipality] = useState("");
    const [province, setProvince] = useState("");
    const [zip_code, setZipCode] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [civil_status, setCivilStatus] = useState("");
    // Other Details
    const [sss_id, setSSSId] = useState("");
    const [tin_id, setTinId] = useState("");
    const [company, setCompany] = useState("");
    const [job_position, setJobPosition] = useState("");

    const handleLogout = (e) => {
        console.log("Button Click");
        localStorage.removeItem('token');
        navigate("/login");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        // Personal Details
        form_data.append("firstname", firstname);
        form_data.append("middlename", middlename);
        form_data.append("lastname", lastname);
        form_data.append("address_street", address_street);
        form_data.append("address_municipality", address_municipality);
        form_data.append("province", province);
        form_data.append("zip_code", zip_code);
        form_data.append("birthday", birthday);
        form_data.append("email", email);
        form_data.append("phone_number", phone_number);
        form_data.append("gender", gender);
        form_data.append("civil_status", civil_status);
        // Other Details
        form_data.append("sss_id", sss_id);
        form_data.append("tin_id", tin_id);
        form_data.append("company", company);
        form_data.append("job_position", job_position);

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
                                    <ListGroup.Item className="text-white bg-secondary border-0" onClick={ () => navigate("/dashboard") }>
                                        <FontAwesomeIcon icon={faGauge} /> Dashboard
                                    </ListGroup.Item>
                                    <ListGroup.Item className="text-white bg-secondary border-0" onClick={ () => navigate("/customers") }>
                                        <FontAwesomeIcon icon={faUsers} /> Customers
                                    </ListGroup.Item>
                                    <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faMoneyBillTransfer} /> Loans</ListGroup.Item>
                                </ListGroup>
                                <h6 className="text-white mt-2">Configurations</h6>
                                <ListGroup className="p-0">
                                    <ListGroup.Item className="text-white bg-secondary border-0"><FontAwesomeIcon icon={faFileContract} /> Product</ListGroup.Item>
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
                                <h6>Customers</h6>
                            </Col>
                        </Row>
                    </Container>
                    {/*Forms*/}
                    <Form onSubmit={ handleSubmit }>
                    <Container fluid className="w-100 mt-2">
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Header className="bg-dark text-white">Personal Details</Card.Header>
                                    <Card.Body>
                                        <Container fluid>
                                            <Row>
                                                <Col>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter First Name" size="sm" value={ firstname } onChange={(e) => setFirstName(e.target.value)} required/>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Middle Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Middle Name" size="sm" value={ middlename } onChange={(e) => setMiddleName(e.target.value)} required/>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Last Name" size="sm" value={ lastname } onChange={(e) => setLastName(e.target.value)} required/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Address</Form.Label>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Control type="text" placeholder="Street" size="sm" value={ address_street } onChange={(e) => setAddressStreet(e.target.value)} required/>
                                                </Col>
                                                <Col>
                                                    <Form.Control type="text" placeholder="City Municipality" size="sm" value={ address_municipality } onChange={(e) => setAddressMunicipality(e.target.value)} required/>
                                                </Col>
                                            </Row>
                                            <Row className="mt-1">
                                                <Col>
                                                    <Form.Label>Province</Form.Label>
                                                    <Form.Select aria-label="Provinces" size="sm" value={ province } onChange={(e) => setProvince(e.target.value)} required>
                                                        <option>Provinces</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col>
                                                    <Form.Label>ZIP Code</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter ZIP" size="sm" value={ zip_code } onChange={(e) => setZipCode(e.target.value)} required/>
                                                </Col>

                                            </Row>
                                            <Row className="mt-1">
                                                <Col>
                                                    <Form.Label>Birthday</Form.Label>
                                                    <Form.Control type="date" placeholder="Enter Birthday" size="sm" value={ birthday } onChange={(e) => setBirthday(e.target.value)} required/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Email" size="sm" value={ email } onChange={(e) => setEmail(e.target.value)} required/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Phone Number" size="sm" value={ phone_number } onChange={(e) => setPhoneNumber(e.target.value)} required/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Select aria-label="Gender" size="sm" value={ gender } onChange={(e) => setGender(e.target.value)} required>
                                                        <option value="1">Male</option>
                                                        <option value="2">Female</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Civil Status</Form.Label>
                                                    <Form.Select aria-label="Civil Status" size="sm" value={ civil_status } onChange={(e) => setCivilStatus(e.target.value)} required>
                                                        <option value="1">Single</option>
                                                        <option value="2">Married</option>
                                                    </Form.Select>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Card>
                                <Card.Header className="bg-dark text-white">Other Details</Card.Header>
                                <Card.Body>
                                    <Container fluid>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>SSS ID</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter SSS ID" size="sm" value={ sss_id } onChange={(e) => setSSSId(e.target.value)} required/>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>TIN ID</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter TIN ID" size="sm" value={ tin_id } onChange={(e) => setTinId(e.target.value)} required/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Company</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Company" size="sm" value={ company } onChange={(e) => setCompany(e.target.value)} required/>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Job Position</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Job Position" size="sm" value={ job_position } onChange={(e) => setJobPosition(e.target.value)} required/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Label>Home Ownership</Form.Label>
                                                    <Form.Select aria-label="Civil Status" size="sm" value={ civil_status } onChange={(e) => setCivilStatus(e.target.value)} required>
                                                        <option value="1">Single</option>
                                                        <option value="2">Married</option>
                                                    </Form.Select>
                                            </Col>
                                            <Col>
                                                <Form.Label>Living Since</Form.Label>
                                                    <Form.Select aria-label="Civil Status" size="sm" value={ civil_status } onChange={(e) => setCivilStatus(e.target.value)} required>
                                                        <option value="1">Single</option>
                                                        <option value="2">Married</option>
                                                    </Form.Select>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col style={{display:'flex', justifyContent:'right'}}>
                                <Button variant="success" size="sm" type="submit">
                                    <FontAwesomeIcon icon={faFloppyDisk} /> Save
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CustomerAdd;