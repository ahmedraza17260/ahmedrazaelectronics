/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import Product from "./Product";
import nextId from "react-id-generator";

function Realme() {

    return (
        <div className=" home ">
            <div className="home__container  ">
                <div className='carousel slide'>
                    <h2 className='heading'>Realme Mobile Phones</h2>
                </div>
                <div style={{ marginTop: "20px", margin: "10px" }} className="container-fluid ">
                    <div className="row " >
                        <div className=' home__row col-lg-3 col-sm-12 col-md-6 '>
                            <Product className='card'
                                id={nextId()}
                                title="GALAXY Z FLIP "
                                price={29.99}
                                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyZFlip-b.jpg"
                                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                                rating={5}
                            />
                        </div>

                        <div className=' home__row col-lg-3 col-sm-12 col-md-6 '>
                            <Product
                                id={nextId()}
                                title="GALAXY S20 PLUS"
                                price={239}
                                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS20Plus-b.jpg"
                                rating={5}
                            />
                        </div>
                        <div className=' home__row col-lg-3 col-sm-12 col-md-6 '>
                            <Product
                                id={nextId()}
                                title="GALAXY S10 PLUS"
                                price={199.99}
                                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS10Plus512GB-b.jpg"
                                rating={3}
                            />
                        </div>
                        <div className=' home__row col-lg-3 col-sm-12 col-md-6 '>

                            <Product
                                id={nextId()}
                                title="REALME 6 PRO"
                                price={98.99}
                                image="https://ahmedrazaelectronic.web.app/Images/Realme6pro-b.jpg"
                                rating={5}
                            />
                        </div>
                        <div className=' home__row col-lg-3 col-sm-12 col-md-6 '>

                            <Product
                                id={nextId()}
                                title="GALAXY S20 ULTRA"
                                price={199.99}
                                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS20Ultra-b.jpg"
                                rating={3}
                            />
                        </div>

                        <div className=' home__row col-lg-3 col-sm-12 col-md-6 '>

                            <Product
                                id={nextId()}
                                title="REALME 5 PRO"
                                price={98.99}
                                image="https://ahmedrazaelectronic.web.app/Images/Realme5Pro8GB-b.jpg"
                                rating={5}
                            />
                        </div>

                        <div className=' home__row col-lg-3 col-sm-12 col-md-6 '>

                            <Product
                                id={nextId()}
                                title="REALME 6"
                                price={199.99}
                                image="https://ahmedrazaelectronic.web.app/Images/Realme6-b.jpg"
                                rating={3}
                            />
                        </div>

                        <div className=' home__row col-lg-3 col-sm-12 col-md-6 '>

                            <Product
                                id={nextId()}
                                title="NOTE 7"
                                price={98.99}
                                image="https://ahmedrazaelectronic.web.app/Images/InfinixNote7-b.jpg"
                                rating={5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Realme;
