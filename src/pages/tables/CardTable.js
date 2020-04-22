import React from "react";
import Pagination from "../../components/pagination/Pagination";

class CardTable extends React.Component {
  state = {
    currentData: [],
    currentPage: null,
    totalItems: null,
  };

  componentDidMount() {
    const totalItems = this.props.table.length;
    this.setState({ totalItems: totalItems });
  }

  onPageChanged = (data) => {
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentData = this.props.table.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentData, totalPages });
  };

  render() {
    const { currentPage, totalItems } = this.state;
    if (!totalItems) return null;
    console.log(totalItems, "totalItems");
    const headerClass = [
      "text-dark py-2 pr-4 m-0",
      currentPage ? "border-gray border-right" : "",
    ]

      .join(" ")
      .trim();

    return (
      <div className="table-responsive">
        <div className="dataTables_wrapper ">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="dataTables_length" id="dataTables_length">
                <label>
                  Show
                  <select
                    name="dataTable_length"
                    aria-controls="dataTable"
                    className="custom-select custom-select-sm form-control form-control-sm"
                  ></select>
                  entries
                </label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="dataTables_filter" id="dataTables_filter">
                <label>
                  Search
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    placeholder
                    aria-controls="dataTable"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <table
                className="table table-border dataTable"
                width="100%"
                cellSpacing="0"
                role="grid"
              >
                <thead>
                  <tr role="row">
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.currentData.map((row, index) => {
                    return (
                      <tr>
                        <td>{row.name}</td>
                        <td>{row.position}</td>
                        <td>{row.office}</td>
                        <td>{row.age}</td>
                        <td>{row.startDate}</td>
                        <td>{row.salary}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </tfoot>
              </table>
            </div>
           
          </div>
          <Pagination
              totalRecords={totalItems}
              pageLimit={7}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
        </div>
      </div>
    );
  }
}

export default CardTable;
