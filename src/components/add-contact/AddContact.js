import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import { newContact } from '../../actions/contactAction';
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newContact = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile
    };

    // console.log(newContact);
    this.props.newContact(newContact, this.props.history);
  };

  render() {
    const { errors } = this.state;
    
    return (
      <div className="add-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">New Contact</h1>
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

                <button className="btn btn-info btn-block mt-4">
                  Add contact
                </button>
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
  { newContact }
)(withRouter(AddContact));
