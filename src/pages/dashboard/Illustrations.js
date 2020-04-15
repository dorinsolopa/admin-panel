import React from "react";
import  posting from "../../assets/posting.png"


class Illustrations extends React.Component {
  render() {
    return (
      <div className="card shadow col-xl-5 m-2">
        <div className="card-header">
          <h5 className="font-weight text-primary">Illustrations</h5>
        </div>
        <div className="card-body">
        <img src={require("../../assets/posting.png")}  style={{width:"25rem"}}/>
          <p>
            Add some quality, svg illustrations to your project courtesy of 
            <a target="_blank" href="https://undraw.co/">
             unDraw </a>, a constantly updated collection of beautiful svg images that
            you can use completely free and without attribution!
          </p>
          <a target="_blank" href="https://undraw.co/">Browse Illustrations on unDraw →</a>
        </div>
      </div>
    );
  }
}

export default Illustrations;
