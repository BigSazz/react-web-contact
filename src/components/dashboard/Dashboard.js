import React, { Component } from 'react';
import { connect } from 'react-redux';
// import FilterContact from '../filter-contact/FilterContact';
import Spinner from '../common/Spinner';
import { getContacts } from '../../actions/contactAction';
import ContactItem from './ContactItem';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contacts, loading } = this.props.contact;
    let contactItems;

    if (contacts === null || loading) {
      contactItems = <Spinner />;
    } else {
      if (contacts.length > 0) {
        contactItems = contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact}/>
        ));
      } else {
        contactItems = <h4>No Contacts found....</h4>;
      }
    }

    return (
      <div>
        {/* Filter component */}
        {/* <FilterContact /> */}
        <div className="contacts">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="display-4 text-center">Your Contacts</div>
                {contactItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Dashboard);
