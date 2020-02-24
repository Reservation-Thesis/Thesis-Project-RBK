import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./App.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const navStyle = {
      color: "Black",
      fontSize: "20px"
    };
    return (
      <nav>
        <Link style={navStyle} to="/">
          <h1 className="logo">Hojozat.com</h1>
        </Link>
        <ul className="nav-links">
          <Link style={navStyle} to="/about">
            About
          </Link>

          <Link style={navStyle} to="/about">
            Contact
          </Link>

          <Link style={navStyle} to="/auth">
            <Button>Login</Button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;