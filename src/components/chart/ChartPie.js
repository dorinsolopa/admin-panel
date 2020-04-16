import React from "react";
import { Doughnut } from "react-chartjs-2";

class ChartPie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartPie: props.chartPie,
    };
  }
  componentWillMount() {
    this.getChartPie();
  }
  getChartPie() {
    this.setState({
      chartPie: {
        type: "doughnut",
        labels: ["Direct", "Referal", "Social"],
        datasets: [
          {
            label: ["Social", "Direct", "Referal"],
            data: [55, 30, 15],
            backgroundColor: ["#6610f2", "#1cc88a", "#36b9cc"],
          },
        ],
      },
    });
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "left",
  };

  render() {
    return (
      <div className="card shadow ">
        <div className="card-header ">
          <h5 className="font-weight text-primary">Revenue Sources</h5>
        </div>
        <div className="card-body">
          <Doughnut
            type="doughnut"
            data={this.state.chartPie}
            options={{
              title: {
                display: this.props.displayTitle,
              
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
            }}
            height="280%"
            
          />
        </div>
      </div>
    );
  }
}

export default ChartPie;
