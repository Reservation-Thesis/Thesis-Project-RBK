import React from "react";
import "./signup.css";
import $ from "jquery";
import NavU from "./navU";
import Footer from "./footer";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      email: "",
      password: ""
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangepassword = this.handleChangepassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.Email);
  }

  handleChangepassword(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  }

  handleSubmit(event) {
    event.preventDefault();

    var that = this;
    $.ajax({
      url: "http://localhost:8000/login",
      type: "POST",
      data: {
        Email: that.state.Email,
        password: that.state.password
      },
      datatype: "json",
      success: data => {
        console.log(data);
        if (data) {
          console.log("correct signin");
          window.location.href = "/userMain";
        } else {
          this.setState({ mssg: "Invalid Email or password" });
          alert("user name or password is not correct!!");
        }
      },
      error: err => {
        console.log("err", err);
        alert("user name is not existe !!");
      }
    });
  }

  render() {
    return (
      <div>
        <NavU />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <form className="ui form">
          <div className="field">
            <input
              id="Email"
              className="inp"
              placeholder="Email"
              onChange={this.handleChangeEmail}
            />
          </div>
          <br />
          <div className="field">
            <input
              id="password"
              className="inp"
              placeholder="password"
              onChange={this.handleChangepassword}
            />
          </div>
          <br />
          <div className="field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                id="inp"
                className="hidden"
                readOnly=""
                tabIndex="0"
              />
              <label id="inp">remember me</label>
            </div>
          </div>
          <br />
          <button type="submit" className="inp" onClick={this.handleSubmit}>
            login
          </button>
        </form>
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
export default Login;