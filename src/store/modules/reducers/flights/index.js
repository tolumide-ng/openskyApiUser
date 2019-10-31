import actionTypes from "../../actionTypes/flights";

const { FLIGHT_FAILURE, FLIGHT_PENDING, FLIGHT_SUCCESS } = actionTypes;

const initialState = {
  searchStatus: "rest",
  searchError: null,
  searchResult: [],
};

const flightTypes = [FLIGHT_FAILURE, FLIGHT_PENDING, FLIGHT_SUCCESS];

export const flightReducer = (state = initialState, { type, payload }) => {
  return flightTypes.includes(type) ? { ...state, ...payload } : state;
};

export default flightReducer;
