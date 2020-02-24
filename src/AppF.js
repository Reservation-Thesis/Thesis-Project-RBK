import React from "react";
import ListItem from "./ListItem";
import Navbar from "./Nav";
import $ from "jquery";
export default class AppF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      backgroundImg: ""
    };
  }
  componentDidMount() {
    this.getData();
  }
  
  getData() {
    var path = window.location.href;
    var myPath = path.split("/");
    var id2 = myPath[1];

    $.ajax({
      url: `${id2}`,
      type: "GET",
      success: function(data) {
        this.setState({
          backgroundImg: data.backgroundImg
        });
      }.bind(this),
      error: function(err) {
        console.log("error");
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <img
          src={this.state.backgroundImg}
          alt="hall"
          width="100%"
          height="600px"
        ></img>
        <ListItem />
      </div>
    );
  }
}