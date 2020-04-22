import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownAlert from "../dropdown_alert/DropdownAlert";
import { dropdownInfo } from "../../components/variable/Variable";
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <div className="input-group mb-2 " style={{ width: "30%" }}>
          <input
            type="text"
            className="form-control border-0 bg-light"
            placeholder="Search for ..."
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" id="button-addon2">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
        {/* Form */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="nav nav-pills nav-fill ">
            {/* Bell */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <i className="fa fa-bell"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className="list-group">
                  <h6 className="dropdown-header bg-primary">ALERTS CENTER</h6>
                  {dropdownInfo.map((drop, index) => {
                    return (
                      <DropdownAlert
                        color={drop.color}
                        icon={drop.icon}
                        text={drop.text}
                        info={drop.info}
                      />
                    );
                  })}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* Dropdown */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <i className="fa fa-envelope"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
          {/* Contact Chips */}
          <div className="split right">
            <div className="centered">
              <small className="font-weight-bold">John </small>
              <img
                src={require("../../assets/avatar2.png")}
                style={{ width: "42px", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
