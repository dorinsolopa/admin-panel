import React from "react";
import Chart from "../../components/chart/ChartLine";
import ChartPie from "../../components/chart/ChartPie";
import ChartBar from "../../components/chart/ChartBar";
import Navbar from "../../components/navbar/Navbar"
class Charts extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
        <div>
          <h3 className="mb-2 text-gray">Charts</h3>
          <p className="mb-4">
            Chart.js is a third party plugin that is used to generate the charts
            in this theme. The charts below have been customized - for further
            customization options, please visit the{" "}
            <a target="_blank" href="https://www.chartjs.org/docs/latest/">
              official Chart.js documentation.
            </a>
          </p>
        </div>
        <div className=" row">
          <div className="col-lg-8 ">
            <Chart legendPosition="bottom" />
          </div>
          <div className="col-lg-4  pr-4">
            <ChartPie legendPosition="bottom" />
          </div>
          <div className="col-lg-8 mt-5 pb-3">
            <ChartBar legendPosition="bottom" />
          </div>
        </div>
        <footer className="text-center">Copyright © Your Website 2020</footer>
      </React.Fragment>
    );
  }
}

export default Charts;
