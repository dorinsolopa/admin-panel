import React from "react";

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
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <i class="fa fa-bell"></i>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            {/* Dropdown */}
            <div className="dropdown ">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                id="menu1"
                data-toggle="dropdown"
              >
                <i className="fa fa-envelope"></i>
                <span class="caret"></span>
              </button>

              <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                <li role="presentation">
                  <a role="menuitem" href="#">
                    HTML
                  </a>
                </li>
                <li role="presentation">
                  <a role="menuitem" href="#">
                    CSS
                  </a>
                </li>
                <li role="presentation">
                  <a role="menuitem" href="#">
                    JavaScript
                  </a>
                </li>
                <li role="presentation" class="divider"></li>
                <li role="presentation">
                  <a role="menuitem" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
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
