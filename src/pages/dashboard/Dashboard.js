import React from "react";
import Navigation from "./Navigation";
import Card from "../../components/card/Card";
import Chart from "../../components/chart/ChartLine";
import { cardsData } from "../../components/variable/Variable";
import  ChartPie from "../../components/chart/ChartPie"
class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />

        <div className="d-sm-flex align-items-center justify-content-between  mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fa fa-download"></i>
            Generate Report
          </a>
        </div>
        <div className="d-flex">
          {cardsData.map((item, index) => {
            return (
              <Card
                title={item.title}
                price={item.price}
                icon={item.icon}
                type={item.type}
              />
            )
          })}
        </div>
        
            <Chart chartData={this.props.chartData}
            legendPosition="bottom" />
            <ChartPie  legendPosition="bottom"/>
        
      </React.Fragment>
    );
  }
}

export default Dashboard;
