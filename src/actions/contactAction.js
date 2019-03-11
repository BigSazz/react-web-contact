import axios from 'axios';
import {
  GET_ERRORS,
  GET_CONTACTS,
  CONTACT_LOADING,
  GET_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT
} from './types';

// Contact Loading
export const setContactLoading = () => {
  return {
    type: CONTACT_LOADING
  };
};

// Add a new contact
export const newContact = (contactData, history) => dispatch => {
  axios
    .post('/contacts', contactData)
    .then(res => history.push('/'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get contacts
export const getContacts = () => dispatch => {
  dispatch(setContactLoading());
  axios
    .get('/contacts')
    .then(res =>
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CONTACTS,
        payload: null
      })
    );
};

// Get a contact
export const getCurrentContact = id => dispatch => {
  dispatch(setContactLoading());
  axios
    .get(`/contacts/${id}`)
    .then(res =>
      dispatch({
        type: GET_CONTACT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CONTACT,
        payload: null
      })
    );
};

// Edit a Contact
export const editContact = (id, update, history) => dispatch => {
  dispatch(setContactLoading());
  axios
    .patch(`/contacts/${id}`, update)
    .then(res =>
      dispatch({
        type: EDIT_CONTACT,
        payload: update
      })
    )
    .then(res => history.push('/'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete a Contact
export const deleteContact = (id) => dispatch => {
  dispatch(setContactLoading());
  axios
    .delete(`/contacts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_CONTACT
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};