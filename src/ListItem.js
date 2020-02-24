import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Item from "./Item";
import Footer from "./footer"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function ListItem() {
  const classes = useStyles();

  // function FormRow() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={4}>
  //         <Item />
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Item />
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Item />
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={24} spacing={3}>
          <Item />
        </Grid>

        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
      </Grid>
      <Footer />
    </div>
  );
}
