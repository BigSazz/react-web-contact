import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactAction';

class ContactItem extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div className="col-6 mb-3">
        <div className="card">
          <h3 className="card-header">{contact.name}</h3>
          <div className="card-body">
            <p>Mobile: {contact.mobile}</p>
            <p>Email: {contact.email}</p>
            <div className="row">
              <div className="col-6">
                <Link to={`/edit/${contact.id}`}>
                  <button className="btn btn-outline-warning">
                    Edit Contact
                  </button>
                </Link>
              </div>
              <div className="col-6">
                <button
                  onClick={() => {
                    this.props.deleteContact(contact.id);
                    window.location.reload();
                  }}
                  className="btn btn-outline-danger col-6"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteContact }
)(ContactItem);
