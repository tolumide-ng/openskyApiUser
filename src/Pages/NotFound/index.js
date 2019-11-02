import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Navbar from "../../Components/Navbar";

const NotFound = () => {
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
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          P A G E&nbsp;&nbsp; N O T &nbsp;&nbsp;F O U N D
          <Link to="/">Go back to Login</Link>
        </span>
      </Grid>
    </>
  );
};

export default NotFound;
