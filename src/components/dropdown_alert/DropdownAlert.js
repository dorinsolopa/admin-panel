import React from "react";

class DropdownAlert extends React.Component {
  render() {
    return (
        
      <a className="d-flex  list-group-item list-group-item-action ">
        <div className="m-2 ">
          <div className={`rounded-circle text-center mr-2 bg-${this.props.color}`} style={{height:"35px",width:"35px"}}>
              <i className={this.props.icon}></i>
          </div>
        </div>
        <div >
            <div className="small text-gray-500">{this.props.text} </div>
            <span className="font-weight-bold">{this.props.info}</span>
        </div>
      </a>
      
    );
  }
}

export default DropdownAlert;