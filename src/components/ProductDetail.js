import React, { useEffect } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
    const productId = useParams();
    const dispatch = useDispatch();
    // console.log(productId);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId._id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(selectedProduct(data));
                // console.log(data);
            })
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId._id])


    // selected products 
    const product = useSelector((state) => state.product);
    console.log(product);
    const { image, category, title, description, price, rating } = product;
    return (
        <>
            {Object.keys(product).length === 0 ? <div><Spinner animation="border" variant="primary" /></div> : <div>
                <Card>
                    <Card.Img variant="top" src={image} style={{ width: '25%', margin: "auto" }} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <h3>${price}</h3>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to="/productListing"><Button variant="primary">Go back ProductList</Button></Link>
                    </Card.Body>
                </Card>
            </div>}
        </>
    );
};

export default ProductDetail;