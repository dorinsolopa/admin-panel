import React from "react";

class Card extends React.Component {
  render() {
    const mainClass = `card shadow  w-100 m-2 border-${this.props.type}`
    return (
      
          <div className={mainClass} style={{borderLeft:"5px solid"}}>
            <div className="card-body  " >
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className={`text-xs font-weight-bold text-${this.props.type} text-uppercase mb-1`}>
                    {this.props.title}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray">
                    {this.props.price}
                  </div>
                </div>
                <div className="col-auto">
                  <i className={this.props.icon}></i>
                </div>
              </div>
            </div>
          </div>
       
    );
  }
}

export default Card;
