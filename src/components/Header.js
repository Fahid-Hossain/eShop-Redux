import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">eShop</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link className="text-white text-decoration-none px-2" to="/">Home</Link>
                            <Link className="text-white text-decoration-none px-2" to="/productListing">ProductList</Link>
                            <Link className="text-white text-decoration-none px-2" to="/addProduct">Add-product</Link>
                        </Nav>
                    </Container>
                </Navbar>


            </>
        </div>
    );
};

export default Header;