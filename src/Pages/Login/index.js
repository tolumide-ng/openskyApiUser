import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    console.log(e.target.value);
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "value") {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("we are here now!!!!!");
    let error = [];
    email.length < 1 && error.push("email cannot be empty");
    password.length < 1 && error.push("password cannot be empty");
    error = [];
    return;
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ marginTop: "100px" }}
    >
      <Grid item xs={8}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            margin="normal"
            fullWidth={true}
            type={"text"}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            margin="normal"
            fullWidth={true}
            type="password"
            name="password"
            onChange={handleChange}
          />

          <Button
            component={Link}
            to="/airport"
            variant="contained"
            fullWidth={true}
            style={{ marginTop: "20px", background: "green" }}
            type="submit"
          >
            Login
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
