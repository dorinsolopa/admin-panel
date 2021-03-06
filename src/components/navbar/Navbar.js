import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownAlert from "../dropdown_alert/DropdownAlert";
import { dropdownInfo } from "../../components/variable/Variable";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      <h4 className="text-center">Ready to Leave?</h4>
      <hr />
      <p className="text-center">Select "Logout" below if you are ready to end your current session.</p>

      <div className="modal-footer">
        <button className="btn btn-secondary" type="button">
          Cancel
        </button>
        <a
          className="btn btn-primary"
          href="/login"
          onClick={closeToast}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

toast.configure();
class Navbar extends React.Component {
  render() {
    const notify = () => {
      toast(<CustomToast />, { position: toast.POSITION.TOP_CENTER });
    };
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
            {/* Bell Dropdown*/}
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
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
            {/* Dropdown  Envelope*/}
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
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

          <Dropdown>
            <Dropdown.Toggle
              variant="white"
              id="dropdown-custom-components"
              style={{ height: "42px" }}
            >
              <div className="split right">
                <div className="centered">
                  <small className="font-weight-bold">John </small>
                  <img
                    src={require("../../assets/avatar2.png")}
                    style={{ width: "32px", borderRadius: "50%" }}
                  />
                </div>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <i className="fa fa-user fa-sm fa-fw mr-2 "></i>
                Profile
              </Dropdown.Item>
              <Dropdown.Item>
                <i className="fa fa-cogs fa-sm fa-fw mr-2"></i>
                Settings
              </Dropdown.Item>
              <Dropdown.Item>
                <i className="fa fa-list-ul fa-sm fa-fw mr-2"></i>
                Activity Log
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <i className="fa fa-sign-out-alt fa-sm fa-fw mr-2"></i>
                <button onClick={notify} className="border-0 bg-white"> Logout</button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    );
  }
}

export default Navbar;
