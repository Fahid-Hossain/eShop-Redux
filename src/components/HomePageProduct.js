import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProducts } from '../redux/actions/productActions';

const HomePageProduct = () => {
    const products = useSelector((state) => state.allProducts.products);

    const dispatch = useDispatch();

    //load data using axios
    const fetchProducts = async () => {
        const response = await axios.get("https://stark-thicket-87413.herokuapp.com/products")
            .catch((error) => {
                console.log("error", error);
            })
        // console.log(response.data);
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <>
            <div className="mt-5 mb-5">
                <h2 className="text-secondary py-2">Some Of Products</h2><hr />
                {
                    products.length === 0 ? <div><Spinner animation="border" /></div> : <div>
                    <Row xs={1} sm={2} md={4} className="m-2">
                        {products.slice(0, 8).map((product, idx) => (
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
                                   <Link to={`productListing/product/${product._id}`}>
                                    <Button variant="outline-primary">Details</Button>{' '}
                                    </Link>
                                    <span><Button className="mx-2" variant="outline-secondary">Buy Now</Button>{' '}</span>
                                   </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Link to="/productListing">
                        <Button variant="outline-primary my-4">See More product...</Button>{' '}
                    </Link>

                </div>
                }
            </div>
        </>
    );
};

export default HomePageProduct;