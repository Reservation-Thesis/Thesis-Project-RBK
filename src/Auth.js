import React from "react";
import "./App.css";
import { BrowserRouter as Router,Link } from "react-router-dom";
import NavU from "./navU";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}));

const Auth = props => {
  const classes = useStyles();

  return (
    <div className="cover">
      <NavU />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button
              onClick={() => props.history.push("/login")}
              className="btn"
              variant="contained"
              color="primary"
            >
              login as a User
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => props.history.push("/loginO")}
              className="btn"
              variant="outlined"
              color="primary"
            >
              login as a Owner
            </Button>
          </Grid>
        </Grid>
      </div>
      <h3 className="tex">I dont have an Account</h3>
      <br />
      <h2 className="tex">Join us</h2>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button
              onClick={() => props.history.push("/signup")}
              className="btn"
              variant="contained"
              color="primary"
            >
              Sign up as a User
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => props.history.push("/signupO")}
              className="btn"
              variant="outlined"
              color="primary"
            >
              Sign up as a Owner
            </Button>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
      </div>

      <div>
        <footer className={classes.footer} id="footer">
          <Typography variant="h6" align="center" gutterBottom>
            HOJOZAT.COM{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Just a couple of clicks away{" "}
          </Typography>
        </footer>
      </div>
    </div>
  );
};

export default Auth;