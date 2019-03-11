import { TEXT_FILTER } from '../actions/types';

// Filter Reducer
const filterInitialSate = {
  text: ''
}

const filterReducer = (state = filterInitialSate, action) => {
  switch (action.type) {
    case TEXT_FILTER:
      return({
        ...state,
        text: action.searchText
      })

    default:
      return state;
  }
}

export default filterReducer;
