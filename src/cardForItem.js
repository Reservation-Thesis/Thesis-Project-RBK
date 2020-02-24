import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 400,
    minHeight: 600,
    float: "left",
    marginLeft: "4rem",
    marginTop: "3rem",
    fontSize: "36px"
  },
  media: {
    height: 500
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.brandsynario.com/wp-content/uploads/2018/01/marriage-halls-lead.jpg"
          title="marrge hall"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontSize: "2.5rem" }}
          >
            Item Name
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontSize: "1.5rem" }}
          >
            <div
              style={{
                marginRight: "3em",
                marginTop: "2em",
                marginLeft: "7em"
              }}
            >
              <h2> name : Mays Alreem</h2>
              <h2> price per Hour : 200$/H</h2>
              <h2> owner : "Mohammad Safy</h2>
              <h2>
                {" "}
                contact info : maysalreem@gmail.com <br /> 0785200000{" "}
              </h2>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          style={{ height: "4rem", fontSize: "1.5rem", marginLeft: "10rem" }}
        >
          reserve now!
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ height: "4rem", fontSize: "1.5rem" }}
        >
          see available time
        </Button>
      </CardActions>
    </Card>
  );
}