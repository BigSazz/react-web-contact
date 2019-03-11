import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editContact, getCurrentContact } from '../../actions/contactAction';
import TextFieldGroup from '../common/TextFieldGroup';

class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      mobile: '',
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getCurrentContact(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.contact.contact) {
      const contact = nextProps.contact.contact;

      this.setState({
        name: contact.name,
        email: contact.email,
        mobile: contact.mobile
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile
    });

    this.props.editContact(this.props.contact.contact.id,  this.state, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="add-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Contact</h1>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Mobile"
                  name="mobile"
                  type="text"
                  value={this.state.mobile}
                  onChange={this.onChange}
                  error={errors.mobile}
                />

                <button className="btn btn-info btn-block mt-4">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { editContact, getCurrentContact }
)(withRouter(AddContact));
