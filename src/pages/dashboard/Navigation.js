import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavLink from "react-bootstrap/NavLink";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import "./Navigation.css";
class Navigation extends React.Component {
  render() {
    return (
      <Navbar>
        <Form className=" d-flex justify-content-between">
          <FormControl
            type="text"
            placeholder="Search for ..."
            className="mr-sm-2  "
          />
          <button type="button" className="btn  btn-primary  ">
            <i className="fa fa-search fa-sm"></i>
          </button>
        </Form>
        <Nav className="mr-auto navbar-nav ">
          <NavLink className="navbar-nav icons">
            <li className="nav-item ">
              <a className="nav-link">
                <i className="fa fa-bell"></i>
              </a>
            </li>

            <li>
              <a className="nav-link">
                <i className="fa fa-envelope fa-md"></i>
              </a>
            </li>
          </NavLink>
        </Nav>

        <Card className="chip rounded-circle">
          <img src={require("../../assets/images.png")} />
        </Card>
      </Navbar>
    );
  }
}
export default Navigation;
