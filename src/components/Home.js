import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from './Header';
import HomePageProduct from './HomePageProduct';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>

            <div className="row g-0 mt-5 pt-3">
                <div className="col-12 col-md-6">
                    <h2 className="text-primary mt-5 pt-4">Welcome to eShop</h2>
                    <p className="text-secondary fs-5 px-4"> Purchase your best product with discount. Check out the product list to your best product experience.</p>
                </div>

                <div className="col-12 col-md-6">
                    <img className="img-fluid" src="https://image.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg" alt="" />
                </div>
            </div>

            <HomePageProduct></HomePageProduct>
            <Footer></Footer>

        </div>
    );
};

export default Home;