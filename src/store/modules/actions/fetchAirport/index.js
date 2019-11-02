import axios from "axios";
import actionTypes from "../../actionTypes/fetchAirport";
import dotenv from "dotenv";

const { SEARCH_PENDING, SEARCH_SUCCESS, SEARCH_FAILURE } = actionTypes;

dotenv.config();

export const fetchPending = () => ({
  type: SEARCH_PENDING,
  payload: {
    searchStatus: "pending",
    searchError: null,
    searchResult: [],
  },
});

export const fetchFailure = searchError => ({
  type: SEARCH_FAILURE,
  payload: {
    searchStatus: "failure",
    searchError,
    searchResult: [],
  },
});

export const fetchSuccess = searchResult => ({
  type: SEARCH_SUCCESS,
  payload: {
    searchStatus: "success",
    searchError: null,
    searchResult,
  },
});

export const fetchAction = () => async dispatch => {
  dispatch(fetchPending());

  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/states/all`,
      method: "get",
    });

    const airports = {};
    // const icao = {};

    if (response && response.data)
      for (let i = 0; i < response.data.states.length; i++) {
        // Get the most used airports by origin_country name
        if (Object.keys(airports).includes(response.data.states[i][2])) {
          airports[response.data.states[i][2]] =
            airports[response.data.states[i][2]] + 1;
        } else {
          airports[response.data.states[i][2]] = 1;
        }
        // Get the traffick at each airport
        // if (Object.keys(icao).includes(response.data.states[i][2])) {
        //   if (
        //     [response.data.states[i][2]].find(icao[response.data.states[i][0]])
        //   ) {
        //     return;
        //   }
        //   icao[response.data.states[i][2]].push(
        //     icao[response.data.states[i][0]]
        //   );
        // }
      }

    const getHighestAirports = (pairs, n) => {
      let keys = Object.keys(pairs);
      keys.sort((a, b) => pairs[b] - pairs[a]);
      return keys.slice(0, n);
    };

    const highestAirports = getHighestAirports(airports, 10);

    const data = { airports, info: response.data, highestAirports };

    // response.data.states.map(item => {
    //   if (Object.keys(airports).includes(item[2])) {
    //     airports[item[2]] = airports[item[2]] + 1;
    //   }
    //   airports[item[2]] = 1;
    // });

    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};
