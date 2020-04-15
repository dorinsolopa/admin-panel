import React from "react";
import { Bar } from "react-chartjs-2";

class ChartBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartBar: props.chartBar,
    };
  }

  componentWillMount() {
    this.getChartBar();
  }

  getChartBar() {
    this.setState({
      chartBar: {
        type: "line",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Earnings:$",
            data: [4215, 5312, 6251, 7841, 9821, 14984],
            backgroundColor: [
              "#030AF8",
              "#08F1BC",
              "#030AF8",
              "#030AF8",
              "#030AF8",
              "#030AF8",
            ],
          },
        ],
      },
    });
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };

  render() {
    return (
      <div className="card shadow ">
        <div className="card-header py-3">
          <h5 className="font-weight text-primary">Bar Chart</h5>
        </div>
        <div className="card-body ">
          <Bar
            type="bar"
            data={this.state.chartBar}
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
          <div>
            <hr />
            <p>
              Styling for the bar chart can be found in the
              /js/demo/chart-bar-demo.js <code>/js/demo/chart-bar-demo.js</code>
              file.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default ChartBar;
