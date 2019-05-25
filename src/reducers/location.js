import { REQUEST, RECEIVE, ERROR } from '../constants/ActionTypes';

const locationListing = (state = { isLocating: false, location: null, regions: null }, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLocating: true,
      };
    case RECEIVE:
      return {
        isLocating: false,
        location: action.location,
        regions: action.regions,
        ...state,
      };
    case ERROR:
      return {
        ...state,
        isLocating: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default locationListing;
