import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import * as Toastr from "toastr";
import Navbar from "../../Components/Navbar";

let error = [];

const LoginPage = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    error = [];
    username.length < 1 && error.push("username cannot be empty");
    password.length < 1 && error.push("password cannot be empty");
    username !== "demo" && error.push("username is incorrect");
    password !== "demo" && error.push("password is incorrect");

    if (error.length) {
      return Toastr.error(error[0]);
    }
    history.push("/airport");
    return;
  };

  return (
    <>
      <Navbar />
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
              label="Username"
              name="username"
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
              variant="contained"
              fullWidth={true}
              style={{
                marginTop: "20px",
                background: "#0000ff",
                color: "white",
                fontWeight: "bold",
              }}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
