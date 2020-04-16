import React from "react";
import { tableData } from "../../components/variable/Variable";
import CardTable from "./CardTable";
import Navbar from "../../components/navbar/Navbar"
class Tables extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <div className="container">
        <h1>Tables</h1>
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net/">
            official DataTables documentation.
          </a>
        </p>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="font-weight text-primary">Data Tables Example</h5>
          </div>
          <div className="card-body">
            <CardTable table={tableData} />
          </div>
        </div>
        <footer className="text-center">
          <span>Copyright © Your Website 2020</span>
        </footer>
       
      </div>
      </React.Fragment>
    );
  }
}

export default Tables;
