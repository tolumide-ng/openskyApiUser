import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAction } from "../../store/modules/actions/fetchAirport";
import {
  Grid,
  ListItem,
  List,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import FlightIcon from "@material-ui/icons/Flight";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const Airport = ({
  fetchSearch,
  status,
  error,
  result,
  airports,
  highestAirports = [],
  match,
  history,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [timeRange, setTimeRange] = React.useState(180);
  const [current, setCurrent] = React.useState("");

  const handleClickOpen = airport => {
    setCurrent(airport);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTimeChange = e => {
    console.log(e.target.dataset.type);
    // setTimeRange(event.target.value);
    // Make request to the api at this point
  };

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
      <List
        component="ul"
        style={{
          width: "300px",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {highestAirports.length > 1 ? (
          highestAirports.map(airport => {
            return (
              <div key={airport}>
                <ListItem
                  button
                  onClick={() => handleClickOpen(airport)}
                  alignItems="flex-start"
                >
                  <ListItemText primary={airport} />
                  <ListItemSecondaryAction style={{ marginLeft: "100px" }}>
                    <IconButton color="primary">
                      <FlightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                {/* <Route path="/starts" exact component={Modal} /> */}
                <Dialog
                  maxWidth="md"
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="max-width-dialog-title"
                >
                  <DialogTitle id="max-width-dialog-title">
                    {current}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText dividers="true">
                      You can view departing and arriving flights by time
                    </DialogContentText>
                    <form
                      className={classes.form}
                      noValidate
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "stretch",
                        width: "100%",
                      }}
                    >
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="time-apart">Departing</InputLabel>
                        <Select
                          autoFocus
                          value={timeRange}
                          data-type="departure"
                          onChange={handleTimeChange}
                          inputProps={{
                            name: "time-apart",
                            id: "time-apart",
                          }}
                        >
                          <MenuItem value="30">30 minutes</MenuItem>
                          <MenuItem value="60">60 minutes</MenuItem>
                          <MenuItem value="180">180 minutes</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="time-apart">Arriving</InputLabel>
                        <Select
                          autoFocus
                          value={timeRange}
                          data-type="arrival"
                          onChange={handleTimeChange}
                          inputProps={{
                            name: "time-apart",
                            id: "time-apart",
                          }}
                        >
                          <MenuItem value="30">30 minutes</MenuItem>
                          <MenuItem value="60">60 minutes</MenuItem>
                          <MenuItem value="180">180 minutes</MenuItem>
                        </Select>
                      </FormControl>
                    </form>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            );
          })
        ) : (
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            L O A D I N G . . .
          </span>
        )}
        {status === "failure" && (
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Your request could not be processed, please relaod
          </span>
        )}
      </List>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    status: state.airportReducer.searchStatus,
    error: state.airportReducer.searchError,
    result: state.airportReducer.searchResult.info,
    airports: state.airportReducer.searchResult.airports,
    highestAirports: state.airportReducer.searchResult.highestAirports,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSearch: () => dispatch(fetchAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Airport);
