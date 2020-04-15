import React from "react";
import { color } from "../../components/variable/Variable";

class ColorSystem extends React.Component {
  render() {
    return (
      <div className="card shadow col-lg-6">
        {color.map((ex, index) => {
          return (
            <div className="">
              <div className="mb-4">
                <div className={`card bg-${ex.color} text-white shadow`}>
                  <div className="card-body">
                    {ex.text}
                    <div className="text-white-50 small"> {ex.small} </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ColorSystem;
