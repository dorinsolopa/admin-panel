import React from "react";
import Chart from "../../components/chart/ChartLine";
import ChartPie from "../../components/chart/ChartPie";
import ChartBar from "../../components/chart/ChartBar";

class Charts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Chart />
        <ChartPie />
        <ChartBar legendPosition="bottom" />
      </React.Fragment>
    );
  }
}

export default Charts;
