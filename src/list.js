import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { BrowserRouter as Router ,Link } from 'react-router-dom'
import "./App.css"

const useStyles = makeStyles(theme => ({
    root: {
      width: '70%',
      maxWidth: 20,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
      },
  }),
);


export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  

  return (
    <div className={classes.heroButtons}>
    <Grid container spacing={2} justify="center">
    <Grid item>
    <List component="nav" aria-labelledby="nested-list-subheader" className="list">
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Login as" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <Link to="/loginO">Owner</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
          <Link to="/login">User</Link>
          </ListItem>
        </List>
      </Collapse>
    </List>
    </Grid>   
    </Grid> 
    </div>  
          
  );
}