import React from "react";
import Card from "../../components/card/Card";
import Chart from "../../components/chart/ChartLine";
import { cardsData } from "../../components/variable/Variable";
import ChartPie from "../../components/chart/ChartPie";
import HorizontalBar from "../../components/chart/HorizontalBar";
import ColorSystem from "../dashboard/ColorSystem";
import Illustrations from "../dashboard/Illustrations";
import Paragraph from "../dashboard/Paragraph";
import Navbar from "../../components/navbar/Navbar";

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="d-sm-flex align-items-center justify-content-between  m-4">
          <h1 className="h3 mb-0 text-gray-800 ml-2">Dashboard</h1>
          <a className=" d-sm-inline-block btn btn-sm btn-primary shadow mr-2">
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
            );
          })}
        </div>
        <div className="row  ">
          <div className="col-lg-8 mt-4">
            <Chart chartData={this.props.chartData} legendPosition="bottom" />
          </div>
          <div className="col-lg-4 mt-4 pr-4">
            <ChartPie legendPosition="bottom" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-4">
            <HorizontalBar />
          </div>
          <div className="col-lg-6 mt-4  pr-4">
            <Illustrations />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-4">
            <ColorSystem />
          </div>
          <div className="col-lg-6 mt-4  pr-4">
            <Paragraph />
          </div>
          
        </div>
        <footer className="text-center">Copyright © Your Website 2020</footer>
      </React.Fragment>
    );
  }
}

export default Dashboard;
