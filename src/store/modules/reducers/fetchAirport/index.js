import actionTypes from "../../actionTypes/fetchAirport";

const { SEARCH_PENDING, SEARCH_FAILURE, SEARCH_SUCCESS } = actionTypes;

const initialState = {
  searchStatus: "rest",
  searchError: null,
  searchResult: [],
};

const searchTypes = [SEARCH_PENDING, SEARCH_FAILURE, SEARCH_SUCCESS];

export const airportReducer = (state = initialState, { type, payload }) => {
  return searchTypes.includes(type) ? { ...state, ...payload } : state;
};

export default airportReducer;
