import React from "react";
import { color } from "../../components/variable/Variable";
import ColorCard from "../../components/color-card/ColorCard";
class ColorSystem extends React.Component {
  render() {
    return (
      <div className=" shadow bg-light">
        <div className="row mt-4">
          {color.map((ex, index) => {
            return (
              <div className="col-md-6">
                <ColorCard color={ex.color} text={ex.text} small={ex.small} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorSystem;
