import React from "react";

  const ColorCard = (props) => {
    return (
        <div className="mb-4">
        <div className={`card bg-${props.color} text-white shadow`}>
          <div className="card-body">
            {props.text}
            <div className="text-white-50 small"> {props.small} </div>
          </div>
        </div>
      </div>
    
    )
};
 export default ColorCard ;