import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavLink from "react-bootstrap/NavLink";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";

class Navigation extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <Navbar>
        <Form className="d-flex justify-content-between">
          <FormControl
            type="text"
            placeholder="Search for ..."
            className="mr-sm-2 "
          />
          <button type="button" className="btn  btn-outline-primary ">
            <i className="fa fa-search"></i>
          </button>
        </Form>
        <Nav className="mr-auto navbar-nav icons">
          <NavLink>
            <i className="fa fa-bell"></i>
          </NavLink>
          <NavLink className="">
            <i className="fa fa-envelope"></i>
          </NavLink>
        </Nav>

        <Card className="right border-0">
          <div className="image_inner_container">
            <img src={this.props.avatarUrl} />
          </div>
        </Card>
      </Navbar>
    );
  }
}
export default Navigation;
