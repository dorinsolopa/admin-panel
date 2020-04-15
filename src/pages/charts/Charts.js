import React from "react";
import Chart from "../../components/chart/ChartLine";
import ChartPie from "../../components/chart/ChartPie";
import ChartBar from "../../components/chart/ChartBar";

class Charts extends React.Component {
  render() {
    return (
      <React.Fragment>
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
        <div className=" d-flex align-content-center flex-wrap  ">
          <Chart legendPosition="bottom" />
          <ChartPie />
          <ChartBar legendPosition="bottom" />
        </div>
        <footer className="text-center">Copyright © Your Website 2020</footer>
      </React.Fragment>
    );
  }
}

export default Charts;
