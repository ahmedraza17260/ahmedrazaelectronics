/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import Product from "./Product";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-material-ui-carousel";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import homePage1 from "./Images/4.jpg";
import homePage2 from "./Images/5.jpg";
import homePage3 from "./Images/6.jpg";
import nextId from "react-id-generator";
import { Divider } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

function Home() {
  // var ID = function () {
  //   // Math.random should be unique because of its seeding algorithm.
  //   // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  //   // after the decimal.
  //   return '_' + Math.random().toString(36).substr(2, 9);
  // };
  // const Example = () => {
  //   const isDesktopOrLaptop = useMediaQuery({
  //     query: '(min-device-width: 1224px)'
  //   })
  //   const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  //   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  //   const isTabletOrMobileDevice = useMediaQuery({
  //     query: '(max-device-width: 1224px)'
  //   })
  //   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  //   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  // }

  return (
    <div className=" home ">
      <div className="home__container  ">
        <div className="carousel slide">
          <Carousel className="" autoPlay autoPlayInterval="3000">
            <img
              className="home__image"
              src={homePage1}
              // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="home page 1"
            />
            <img
              className="home__image"
              src={homePage2}
              // src="https://images-eu.ssl-images-amazon.com/images/G/02/Amazon-co-uk-hq/2018/img/Prime/XCM_Manual_1133281_gatewayRedesignAcq_1500x600_Prime_1133280_30free-1x_1534769204-jpg._CB484986347_.jpg"
              alt="home page 2"
            />
            <img
              className="home__image"
              src={homePage3}
              // src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/in_prime_pod_gw_adapts_acquisition_1500x600._CB405871129_.jpg"
              alt="home page 3"
            />
          </Carousel>
          <h2 className="heading">Latest Mobile Phones</h2>
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
                title="VIVO V19"
                price={29.99}
                image="https://ahmedrazaelectronic.web.app/Images/VivoV19-b.jpg"
                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={5}
              />
            </div>

            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="GALAXY S20 PLUS"
                price={239}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS20Plus-b.jpg"
                rating={5}
              />
            </div>
            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="GALAXY Z FLIP"
                price={199.99}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyZFlip-b.jpg"
                rating={3}
              />
            </div>
            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="REALME 6 PRO"
                price={98.99}
                image="https://ahmedrazaelectronic.web.app/Images/Realme6pro-b.jpg"
                rating={5}
              />
            </div>
            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="GALAXY S20 ULTRA"
                price={199.99}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS20Ultra-b.jpg"
                rating={3}
              />
            </div>

            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="REALME 5 PRO"
                price={98.99}
                image="https://ahmedrazaelectronic.web.app/Images/Realme5Pro8GB-b.jpg"
                rating={5}
              />
            </div>

            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="REALME 6"
                price={199.99}
                image="https://ahmedrazaelectronic.web.app/Images/Realme6-b.jpg"
                rating={3}
              />
            </div>

            <div className=" home__row col-lg-3 col-sm-12 col-md-6 ">
              <Product
                id={nextId()}
                title="NOTE 7"
                price={98.99}
                image="https://ahmedrazaelectronic.web.app/Images/InfinixNote7-b.jpg"
                rating={5}
              />
            </div>

            {/* <Product
                id={nextId()}
                title="GALAXY S20 ULTRA"
                price={199.99}
                image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS20Ultra-b.jpg"
                rating={3}
              />

              <Product
                id={nextId()}
                title="REALME 5 PRO"
                price={98.99}
                image="https://ahmedrazaelectronic.web.app/Images/Realme5Pro8GB-b.jpg"
                rating={5}
              />

              <Product
                id={nextId()}
                title="REALME 6"
                price={199.99}
                image="https://ahmedrazaelectronic.web.app/Images/Realme6-b.jpg"
                rating={3}
              />

              <Product
                id={nextId()}
                title="NOTE 7"
                price={98.99}
                image="https://ahmedrazaelectronic.web.app/Images/InfinixNote7-b.jpg"
                rating={5}
              /> */}
            {/* </div> */}
          </div>
        </div>

        {/* <hr /> */}
        {/* <Divider /> */}
        {/* <Fade> */}
        {/* <div className="col-lg-3 col-sm-12 col-md-6 home__row  ">
          <Product
            id={nextId()}
            title="GALAXY S20 ULTRA"
            price={199.99}
            image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS20Ultra-b.jpg"
            rating={3}
          />

          <Product
            id={nextId()}
            title="REALME 5 PRO"
            price={98.99}
            image="https://ahmedrazaelectronic.web.app/Images/Realme5Pro8GB-b.jpg"
            rating={5}
          />

          <Product
            id={nextId()}
            title="REALME 6"
            price={199.99}
            image="https://ahmedrazaelectronic.web.app/Images/Realme6-b.jpg"
            rating={3}
          />

          <Product
            id={nextId()}
            title="NOTE 7"
            price={98.99}
            image="https://ahmedrazaelectronic.web.app/Images/InfinixNote7-b.jpg"
            rating={5}
          />

        </div>

        <div className="col-lg-3 col-sm-12 col-md-6 home__row  ">
          <Product
            id={nextId()}
            title="GALAXY S20 ULTRA"
            price={199.99}
            image="https://ahmedrazaelectronic.web.app/Images/SamsungGalaxyS20Ultra-b.jpg"
            rating={3}
          />

          <Product
            id={nextId()}
            title="REALME 5 PRO"
            price={98.99}
            image="https://ahmedrazaelectronic.web.app/Images/Realme5Pro8GB-b.jpg"
            rating={5}
          />

          <Product
            id={nextId()}
            title="REALME 6"
            price={199.99}
            image="https://ahmedrazaelectronic.web.app/Images/Realme6-b.jpg"
            rating={3}
          />

          <Product
            id={nextId()}
            title="NOTE 7"
            price={98.99}
            image="https://ahmedrazaelectronic.web.app/Images/InfinixNote7-b.jpg"
            rating={5}
          />

        </div> */}

        {/* </Fade> */}

        {/* <Slide>
          <div className="home__row">
            <Product
              id={nextId()}
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              rating={4}
            />
          </div>
        </Slide> */}

        {/* <Slide>
          <div className="home__row">
            <Product
              id={nextId()}
              title="Apple iPhone 11 (64GB) - Black"
              price={650.99}
              image="https://images-eu.ssl-images-amazon.com/images/I/41TR7G8VboL._AC_US160_FMwebp_QL70_.jpg"
              rating={5}
            />
            <Product
              id={nextId()}
              title="OnePlus 8 Pro (Glacial Green 12GB RAM + 256GB Storage"
              price={200.99}
              image="https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UY218_.jpg"
              rating={5}
            />
            <Product
              id={nextId()}
              title="Samsung Galaxy Note 20(Mystic Bronze, 8GB RAM, 256GB Storage)"
              price={300.99}
              image="https://m.media-amazon.com/images/I/61ZhiGSzb7L._AC_UY218_.jpg"
              rating={4}
            />
            <Product
              id={nextId()}
              title="PowerMax Fitness BS-150 Home Use Group Bike/Spin Bike with iPad & Bottle Holder"
              price={110.99}
              image="https://m.media-amazon.com/images/I/61gCBYR5G7L._AC_UY218_.jpg"
              rating={5}
            />
          </div>
        </Slide> */}
        <br />
      </div>
    </div>
  );
}

export default Home;
