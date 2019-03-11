import React, { Component } from 'react';

class FilterContact extends Component {
  render() {
    return (
      <div className="search">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search for a contact"
                value="value"
                onChange={e => {}}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterContact;
