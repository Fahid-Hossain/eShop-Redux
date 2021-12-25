import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Container>
                    <Navbar.Brand to="/"><h3>eShop</h3></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="text-white text-decoration-none px-2" to="/">Home</Link>
                            <Link className="text-white text-decoration-none px-2" to="/productListing">ProductList</Link>
                            <Link className="text-white text-decoration-none px-2" to="/addProduct">Add-product</Link>
                        </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </>
        </div>
    );
};

export default Header;