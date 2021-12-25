import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white text-center text-lg-start mt-5 pt-5">
            {/* <!-- Grid container --> */}
            <div className="container p-4">
                {/* <!--Grid row--> */}
                <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">e-Shop Content</h5>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Branch</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Rampura, Dhaka</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">GanginarPar,Mymensing</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Zailroad, Sylet</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Townhall, Chitagong</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-white">Facebook</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Twitter</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Instagram</a>
                            </li>
                        
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
                {/* © 2020 Copyright: */}
                <a className="text-white" href="/">eShopOnlineShop.com</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    );
};

export default Footer;