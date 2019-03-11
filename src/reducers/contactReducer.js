import {
  ADD_CONTACT,
  GET_CONTACTS,
  EDIT_CONTACT,
  DELETE_CONTACT,
  CONTACT_LOADING,
  GET_CONTACT
} from '../actions/types';

const initiateState = {
  contact: null,
  contacts: null,
  loading: false
};

const contactReducer = (state = initiateState, action) => {
  switch (action.type) {
    case CONTACT_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
        contacts: null,
        loading: false
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contact: action.payload,
        loading: false
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contact: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default contactReducer;
