/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import Product from "./Product";
import nextId from "react-id-generator";

function Samsung() {
  return (
    <div className=" home ">
      <div className="home__container  ">
        <div className="carousel slide">
          <h2 className="heading">Samsung Mobile Phones</h2>
        </div>
        <div
          style={{ marginTop: "20px", margin: "10px" }}
          className="container-fluid "
        >
          <div className="row ">
            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                className="card"
                id={nextId()}
                title="GALAXY Z FLIP "
                price={249999}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyZFlip-b.jpg"
                rating={5}
              />
            </div>

            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="GALAXY S20 ULTRA"
                price={229999}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS20Ultra-b.jpg"
                rating={5}
              />
            </div>
            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="GALAXY S10 PLUS"
                price={219999}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS10Plus512GB-b.jpg"
                rating={3}
              />
            </div>
            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="NOTE 10 PLUS"
                price={189999}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyNote10Plus-b.jpg"
                rating={5}
              />
            </div>
            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="GALAXY S20 PLUS"
                price={189999}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS20Plus-b.jpg"
                rating={4}
              />
            </div>

            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="Note 9 512GB"
                price={170000}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyNote9512GB-b.jpg"
                rating={5}
              />
            </div>

            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="Note 10"
                price={169999}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyNote10-b.jpg"
                rating={5}
              />
            </div>

            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="GALAXY S20"
                price={166999}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS20-b.jpg"
                rating={5}
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Samsung;
