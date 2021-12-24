import React from 'react';
import Header from './Header';
import { useForm } from "react-hook-form";
import "./AddProduct.css"
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        axios.post("http://localhost:5000/products",data)
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
            <h1>Add Your Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} placeholder="Product-Name"/>
                <textarea {...register("description")} placeholder="description" />
                <input {...register("price")} placeholder="price" />
                <input {...register("category")} placeholder="category" />
                <input {...register("image")} placeholder="image-url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;