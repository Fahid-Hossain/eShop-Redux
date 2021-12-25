import React from 'react';
import { Card, Col, Row, Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    return (
        <div className="mt-5 min-vh-100">
           {
               products.length === 0 ? <div className="fs-5">Loading...  <Spinner animation="grow" size="sm" /></div> :  <Row xs={1} sm={2} md={4} className="m-2">
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
                           <div className="d-flex flex-direction-row justify-content-center">
                                   <Link to={`product/${product._id}`}>
                                    <Button variant="outline-primary">Details</Button>{' '}
                                    </Link>
                                    <span><Button className="mx-2" variant="outline-secondary">Buy Now</Button>{' '}</span>
                                   </div>
                       </Card>
                   </Col>
               ))}
           </Row>
           }
        </div>
    );
};

export default ProductComponent;