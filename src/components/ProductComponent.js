import React from 'react';
import { Card, Col, Row ,Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    return (
        <div>
            <Row xs={1} md={4} className="m-2">
                {products.map((product, idx) => (
                    <Col>

                        <Card style={{ height: "23rem", marginTop: "10px" }}>
                            <Card.Img variant="top" src={product.image} style={{ width: "7rem", margin: "auto", height: "8rem" }} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <h2>${product.price}</h2>
                                <Card.Text>
                                    {product.category}
                                </Card.Text>
                            </Card.Body>
                            <Link to={`product/${product.id}`}>
                            <Button variant="outline-secondary">Details</Button>{' '}
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductComponent;