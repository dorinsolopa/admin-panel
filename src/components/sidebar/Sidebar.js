import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

class Sidebar extends React.Component {
  render() {
    const routes = this.props.routes.filter((route) => {
      return route.menu === true;
    });

    return (
      <div className="nav-side-menu text-white ">
        <div className=" text-center ">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fa fa-laugh-wink fa-2x"></i>
          </div>
          <h5>SD ADMIN</h5>
        </div>
<hr className="sidebar-divider my-1" />
        <div>
          <ul className="bg-primary">
            {routes.map((route, index) => {
              return (
                <li className="nav-item ">
                  <Link to={route.path} className="s-sidebar__nav-link">
                    {route.name}
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
