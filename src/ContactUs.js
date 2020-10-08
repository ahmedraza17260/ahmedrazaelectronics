import React, { Component } from "react";
import './ContactUs.css';
import { Button, Form, Col } from 'react-bootstrap';

class ContactUs extends Component {
   
    //  handleEmailChange(e) {
    //     this.setState({email: e.target.value});
    //  }
    //  handleFirstNameChange(e) {
    //     this.setState({firstName: e.target.value});
    //  }
    //  handleLastNameChange(e) {
    //     this.setState({lastName: e.target.value});
    //  }

    //  handlePasswordChange(e) {
    //     this.setState({password: e.target.value});
    //  }
     
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        console.log(this.state.value)
        // console.log( "event" + event.target.value)
        event.preventDefault();
      }

      handleLogin(event) {
        console.log("EMail: " + this.state.email);
        console.log("Password: " + this.state.password);
    }
    render() {
        return (
            <div className='container'>
                <Form className='form' onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="firstName"  required type="text" placeholder="Enter First Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="lastName"   required type="text" placeholder="Enter Last Name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email"   required type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password"   required type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control required placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Sindh</option>
                                <option>Punjab</option>
                                <option>NWFP</option>
                                <option>KPK</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check required type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </div>
        );
    }
}

export default ContactUs;
