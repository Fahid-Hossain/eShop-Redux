import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Header from './Header';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import Footer from './Footer';
import {setProducts} from '../redux/actions/productActions';

const ProductListing = () => {
    const products = useSelector((state) =>state);

    const dispatch = useDispatch();

    //load data using axios
    const fetchProducts = async()=>{
        const response = await axios.get("https://stark-thicket-87413.herokuapp.com/products")
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
            <Footer></Footer>
        </>
    );
};

export default ProductListing;