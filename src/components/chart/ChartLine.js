import React from "react";
import {Line } from "react-chartjs-2";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData ,
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        type: "line",
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          
        ],
        datasets: [
          {
            label: "Earnings:$",
            data: [
              0,
              10000,
              5000,
              15000,
              10000,
              20000,
              15000,
              25000,
              20000,
              30000,
              40000,
            ],
            backgroundColor: ["#062EF8"],
          },
        ],
      },
    });
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "center"
  };

  render() {
    return (
      <div className="card shadow ">
        <div className="card-header">
          <h5 className="font-weight text-primary">Earnings Overview</h5>
        </div>
        <div className="card-body">
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                fontSize: 10,
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default Chart;
