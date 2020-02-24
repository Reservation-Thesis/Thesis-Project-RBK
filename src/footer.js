import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import "./App.css"



const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <footer className={classes.footer} id="footer">
        <Typography variant="h6" align="center" gutterBottom>
                    HOJOZAT.COM        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Just a couple of clicks away </Typography>
      </footer>
    </React.Fragment>
  );
}