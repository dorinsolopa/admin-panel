import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  // constructor(props) {
  //   this.state = {
  //     visible: false,
  //   };
  //   this.handleMouseDown = this.handleMouseDown.bind(this);
  //   this.toggleMenu = this.toggleMenu.bind(this);
  // }
  // handleMouseDown(e) {
  //   this.toggleMenu();
  //   console.log("clicked");
  //   e.stopPropagation();
  // }

  // toggleMenu() {
  //   this.setState({
  //     visible: !this.state.visible,
  //   });
  // }
  render() {
    const routes = this.props.routes.filter((route) => {
      return route.menu === true;
    });

    return (
      <div className="sidebar-wrapper " id="sidebar">
        <div className="">
          <i className="fas fa-laugh-wink"></i>
          <h3>SD ADMIN</h3>
        </div>

        <div>
          <ul className="navbar-nav">
            {routes.map((route, index) => {
              return (
                <li className="nav-item">
                  <i className="fa fa-dashboard"></i>
                  <Link to={route.path}>{route.name}
                  <i className={route.icon}></i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
