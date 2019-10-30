import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchAction } from "../../store/modules/actions/fetchAirport";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const Airport = ({
  fetchSearch,
  status,
  error,
  result,
  airports,
  heighestAirports,
}) => {
  const classes = useStyles();
  useEffect(() => {
    fetchSearch();
  }, [fetchSearch]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ marginTop: "100px" }}
    >
      <Grid xs={9} container direction="column"></Grid>
    </Grid>
    // <Grid
    //   container
    //   spacing={0}
    //   direction="column"
    //   alignItems="center"
    //   style={{ marginTop: "100px" }}
    // >
    //   <Grid item xs={8} style={{ background: "green" }}>
    //     {/* <div style={{ background: "green" }}> */}
    //     <p>This is the airport page, this should be a really long text</p>
    //     {/* </div> */}
    //   </Grid>
    // </Grid>
  );
};

const mapStateToProps = state => {
  return {
    status: state.airportReducer.searchStatus,
    error: state.airportReducer.searchError,
    result: state.airportReducer.searchResult.info,
    airports: state.airportReducer.searchResult.airports,
    heighestAirports: state.airportReducer.searchResult.heighestAirports,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSearch: () => dispatch(fetchAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Airport);
