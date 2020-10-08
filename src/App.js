/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import ContactUs from "./ContactUs";
import Footer from './Footer';
import Samsung from "./Samsung";
import Vivo from './Vivo';
import Realme from "./Realme";
import Oppo from './Oppo';
import Infinix from './Infinix';
import Huawei from './Huawei';


const promise = loadStripe(
  "pk_test_51HQ6wgCrw7Aopfb2z1FfbJ02Y31TL0NNHQuuK0eMSBmusFw5N9t3FAzObO9LftYNyflPbl2xmn5FLiNnDcoFvpBO00YdnHhr9m"
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/contactus">
            <Header />
            <ContactUs />
          </Route>

          <Route path="/samsung">
            <Header />
            <Samsung />
            <Footer />
          </Route>

          <Route path="/vivo">
            <Header />
            <Vivo />
            <Footer />
          </Route>

          <Route path="/realme">
            <Header />
            <Realme />
            <Footer />
          </Route>
          <Route path="/oppo">
            <Header />
            <Oppo />
            <Footer />
          </Route>

          <Route path="/infinix">
            <Header />
            <Infinix />
            <Footer />
          </Route>

          <Route path="/huawei">
            <Header />
            <Huawei />
            <Footer />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
