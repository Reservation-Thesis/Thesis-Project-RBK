import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Calender from "./Calender";

export default class Appointments extends React.Component {
  render() {
    return (
      <div>

        <Calender />
    
      </div>
    );
  }
}