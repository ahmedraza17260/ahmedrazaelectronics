/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./App.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


function Footer() {
  return (
    <div>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <div className='col-md-3' style={{ float: "" }}>
              <MDBCol md="">
                <div className="">
                  <h5 style={{ textAlign: "left" }} className="font-weight-bold text-uppercase mb-3 ">
                    Contact Us
              </h5>
                  <ul className=" list-unstyled " style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
                    <li>
                      {" "}
                      <PhoneIcon />
                      <i className=""></i> &nbsp; CELL:
                  +92-323-2190116{" "}
                    </li>
                    <li>
                      {" "}
                      <EmailIcon />
                      <i className=""></i> &nbsp;
                  ahmedraza17260@gmail.com{" "}
                    </li>
                  </ul>
                </div>
              </MDBCol>
            </div>
            <div className='col-md-3'>
              <MDBCol md="">
                <h5 style={{ textAlign: "left" }} className="font-weight-bold text-uppercase mb-3">LINKS</h5>
                <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
                  <Link to='/'>
                    <li className="list-unstyled">
                      <a href="/">Home</a>
                    </li>
                  </Link>
                  <Link to='/contactus'>
                    <li className="list-unstyled">
                      <a href="/src/ContactUs.js">Contact Us</a>
                    </li>
                  </Link>
                </ul>
              </MDBCol>
            </div>
            <div className='col-md-3'>
              <MDBCol md="">
                <h5 style={{ textAlign: "left" }} className="font-weight-bold text-uppercase mb-3">Mobiles Phones</h5>
                <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
                  <Link to='/samsung'>
                    <li className="list-unstyled">
                      <a href="samsung">Samsung</a>
                    </li>
                  </Link>
                  <Link to='/vivo'>
                    <li className="list-unstyled">
                      <a href="vivo">Vivo</a>
                    </li>
                  </Link>
                  <Link to='/realme'>
                    <li className="list-unstyled">
                      <a href="realme">Realme</a>
                    </li>
                  </Link>
                  <Link to='/oppo'>
                    <li className="list-unstyled">
                      <a href="oppo">Oppo</a>
                    </li>
                  </Link>
                  <Link to='/infinix'>
                    <li className="list-unstyled">
                      <a href="infinix">Infinix</a>
                    </li>
                  </Link>
                  <Link to='/huawei'>
                    <li className="list-unstyled">
                      <a href="huawei">Huawei</a>
                    </li>
                  </Link>
                </ul>
              </MDBCol>
            </div>
            <div className='col-md-3'>
              <MDBCol md="">
                <h5 style={{ textAlign: "left" }} className="font-weight-bold text-uppercase mb-3">Connect Us</h5>
                <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
                  <li className="list-unstyled">
                    <a href="https://www.facebook.com/ahmedraza1626">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="https://www.instagram.com/ahmedraza17260">
                      <InstagramIcon />
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="https://twitter.com/ahmedraza17260">
                      <TwitterIcon />
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="https://www.linkedin.com/in/ahmed-raza-17260a/">
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="https://www.github.com/ahmedraza17260">
                      <GitHubIcon />
                    </a>
                  </li>

                </ul>
              </MDBCol>
            </div>
            <hr />
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:
            <Link to='/'>
              <div> AhmedRazaElectronic </div>
            </Link>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div >
  );
}

export default Footer;
