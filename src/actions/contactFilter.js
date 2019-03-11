import { TEXT_FILTER } from './types';

// TEXT_FILTER
export const textFilter = searchText => {
  return {
    type: TEXT_FILTER,
    payload: searchText
  };
};
