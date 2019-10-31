import axios from "axios";
import actionTypes from "../../actionTypes/flights";
import dotenv from "dotenv";

const { FLIGHT_PENDING, FLIGHT_SUCCESS, FLIGHT_FAILURE } = actionTypes;

dotenv.config();

export const flightPending = () => ({
  type: FLIGHT_PENDING,
  payload: {
    searchStatus: "rest",
    searchError: null,
    searchResult: [],
  },
});

export const flightFailure = searchError => ({
  type: FLIGHT_FAILURE,
  payload: {
    searchStatus: "failure",
    searchError,
    searchResult: [],
  },
});

export const flightSuccess = searchResult => ({
  type: FLIGHT_SUCCESS,
  payload: {
    searchStatus: "failure",
    searchError: null,
    searchResult,
  },
});

export const flightAction = ({ type }) => async dispatch => {
  dispatch(flightPending());

  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/states`,
      // https://USERNAME:PASSWORD@opensky-network.org/api/flights/arrival?airport=EDDF&begin=1517227200&end=1517230800
    });
  } catch (error) {
    dispatch(flightFailure(error));
  }
};
