import React from 'react'
import { Container, Nav, Navbar, Form, FormControl } from 'react-bootstrap'
import Footer from './Footer'
import Home from './Home'
const Dashboard = () => {
    return (
        <>
            <Container fluid>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"> <h3> Grocery Shop </h3> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    id="searchVal"
                                    placeholder="Search"
                                    className="me-5"
                                    aria-label="Search"
                                />
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Home />
             <Footer/>
            </Container>
        </>
    )
}

export default Dashboard