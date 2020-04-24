import React from "react";
import { withRouter } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const AppLayout = (props) => {
//   console.log(props, "props comment");

  const isPrivat = props.routes.find((route) => {
    return props.location.pathname === route.path;
  });
//   console.log(isPrivat, "isPrivat");
  if (!isPrivat) {
    return <div>{props.children}</div>;
  }

  return (
    <div className="row bg-light">
      <div className="col-2  bg-primary text-white">
        <Sidebar routes={props.routes} />
      </div>

      <div className="col-10 ">{props.children}</div>
    </div>
  );
};

export default withRouter(AppLayout);
