import React from 'react';
import Header from './Header';
import { useForm } from "react-hook-form";
import "./AddProduct.css"
import axios from 'axios';
import Footer from './Footer';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        axios.post("https://stark-thicket-87413.herokuapp.com/products",data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Product Added successfully!");
            }
            reset();
        })
    };
    return (
        <div className="add-service">
            <Header></Header>
            <h2 className="mt-5 text-primary">Add Your Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} placeholder="Product-Name"/>
                <textarea {...register("description")} placeholder="description" />
                <input {...register("price")} placeholder="price" />
                <input {...register("category")} placeholder="category" />
                <input {...register("image")} placeholder="image-url"/>
                <input type="submit" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;