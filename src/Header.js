/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import LOGO from "./Images/ARE-01-2.png";
import { Divider } from "@material-ui/core";
import {
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Samsung from "./Samsung";
import Search from "./Search";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  // console.log(basket);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className=" navbar navbar-expand-lg navbar-light header">
      <Link to="/">
        <img
          className="navbar-brand header__logo"
          alt="logo"
          src={LOGO}
          // src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <Search />
      {/* <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="header__searchIcon" />
      </div> */}
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className="header__option"
            type="text"
          >
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option" type="text">
          <Dropdown as={ButtonGroup}>
            <span className="header__optionLineTwo" variant="none">
              <span className="header__optionLineOne"> Mobile</span> <br />
              Phones
            </span>

            <Dropdown.Toggle split variant="none" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Link to="/samsung">
                <NavDropdown.Item href="samsung">Samsung</NavDropdown.Item>
              </Link>
              <Link to="/vivo">
                <NavDropdown.Item href="vivo">Vivo</NavDropdown.Item>
              </Link>
              <Link to="/realme">
                <NavDropdown.Item href="realme">Realme</NavDropdown.Item>
              </Link>
              <Link to="/oppo">
                <NavDropdown.Item href="oppo">Oppo</NavDropdown.Item>
              </Link>
              <Link to="/infinix">
                <NavDropdown.Item href="infinix">Infinix</NavDropdown.Item>
              </Link>
              <Link to="/huawei">
                <NavDropdown.Item href="huawei">Huawei</NavDropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Link to="/contactus">
          <div className="header__option" type="text">
            <span className="header__optionLineOne"> Contact </span>
            <span className="header__optionLineTwo"> Us </span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount ">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;

{
  /* <nav className="navbar navbar-expand-lg navbar-light container-fluid " > */
}
{
  /* <Link to="/">
          <img
            className="navbar-brand header__logo"
            alt="logo"
            src={LOGO}
          // src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link> */
}
{
  /* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */
}
{
  /* <div ClassName="collapse navbar-collapse" id="navbarText">
          <ul ClassName="navbar-nav mr-auto">
          </ul>
          <span ClassName="navbar-text mr-3 ">
            <ul ClassName="navbar-nav mr-auto">
              <li ClassName="nav-item active">
                <div className="header__search">
                  <input className="header__searchInput" type="text" />
                  <SearchIcon className="header__searchIcon" />
                </div>
              </li>
              <li ClassName="nav-item active">
                <Link to={!user && "/login"}>
                  <div
                    onClick={handleAuthentication}
                    className="header__option"
                    type="text"
                  >
                    <span className="header__optionLineOne">
                      Hello {!user ? "Guest" : user.email}
                    </span>
                    <span className="header__optionLineTwo">
                      {user ? "Sign Out" : "Sign In"}
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/orders">
                  <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                  </div>
                </Link>
              </li>
              <li ClassName="nav-item dropdown">
                <Dropdown as={ButtonGroup}>
                  <span className="header__optionLineTwo" variant="none"><span className='header__optionLineOne'> Mobile</span>  <br />Phones</span>

                  <Dropdown.Toggle split variant="none" id="dropdown-split-basic" />

                  <Dropdown.Menu>
                    <NavDropdown.Item href="#">Samsung</NavDropdown.Item>
                    <NavDropdown.Item href="#">Vivo</NavDropdown.Item>
                    <NavDropdown.Item href="#">Realme</NavDropdown.Item>
                    <NavDropdown.Item href="#">Infinix</NavDropdown.Item>
                    <NavDropdown.Item href="#">Oppo</NavDropdown.Item>
                    <NavDropdown.Item href="#">Huawei</NavDropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li ClassName="nav-item">
                <Link to='/contactus'>
                  <div className="header__option" type="text">
                    <span className="header__optionLineOne"> Contact </span>
                    <span className="header__optionLineTwo"> Us </span>
                  </div>
                </Link>
              </li>
              <li ClassName="nav-item">
                <Link to="/checkout">
                  <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount ">
                      {basket?.length}
                    </span>
                  </div>
                </Link>
              </li>

            </ul>

          </span>
        </div> */
}
{
  /* </nav> */
}
