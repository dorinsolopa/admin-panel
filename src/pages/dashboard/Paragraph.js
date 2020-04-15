import React from "react";

class Paragraph extends React.Component {
  render() {
    return (
      <div className="card shadow col-xl-5 m-2">
        <div className="card-header">
          <h5 className="font-weight text-primary">Development Approach</h5>
        </div>
        <div className="card-body">
          <p>
            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
            order to reduce CSS bloat and poor page performance. Custom CSS
            classes are used to create custom components and custom utility
            classes.
            <br />
            <br />
            Before working with this theme, you should become familiar with the
            Bootstrap framework, especially the utility classes.
          </p>
        </div>
      </div>
    );
  }
}

export default Paragraph;
