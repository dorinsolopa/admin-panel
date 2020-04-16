import React from "react";
import { chartBar } from "../variable/Variable";
class HorizontalBar extends React.Component {
  render() {
    return (
      <div className="card shadow ">
        <div className="card-header ">
          <h5 className="font-weight text-primary"> Project </h5>
        </div>

        {chartBar.map((bar, index) => {
          return (
            <div className="card-body ">
              <h4 className="small font-weight-bold">{bar.name}</h4>
              <span className="float-top"> {bar.load} </span>
              <div className="progress">
                <div
                  className={`progress-bar bg-${bar.color}`}
                  role="progressbar"
                  style={{ width: `${bar.width}`}}
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HorizontalBar;
