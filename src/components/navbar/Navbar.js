import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        
        <div class="input-group mb-2" style={{width:"30%"}} >
     <input type="text" className="form-control" placeholder="Search for ..." aria-label="Search" aria-describedby="button-addon1" />
      <div class="input-group-append">
     <button class="btn btn-primary" type="button" id="button-addon1"> <i class="fa fa-search"></i> </button>
  </div>
</div>
        
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="nav nav-pills nav-fill ">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <i class="fa fa-bell"></i>
                <span class="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item dropdown active">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-envelope fa-md"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>

          <div class="split right">
            <div class="centered">
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
