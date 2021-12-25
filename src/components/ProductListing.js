import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Header from './Header';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions';

const ProductListing = () => {
    const products = useSelector((state) =>state);

    const dispatch = useDispatch();

    //load data using axios
    const fetchProducts = async()=>{
        const response = await axios.get("http://localhost:5000/products")
        .catch((error)=>{
            console.log("error",error);
        })
        // console.log(response.data);
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    console.log("products", products);

    return (
        <>
            <Header></Header>
            <ProductComponent></ProductComponent>
        </>
    );
};

export default ProductListing;