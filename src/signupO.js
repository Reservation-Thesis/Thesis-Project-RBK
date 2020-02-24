import React from "react";
import "./signup.css";
import $ from 'jquery';
import {Redirect} from 'react-router-dom'
import NavU from "./navU";
import Footer from "./footer";


class SignupO extends React.Component {
    constructor(props) {
        super(props);
         this.state = {status:{},
         redirect: false
        };
         this.handleChange = this.handleChange.bind(this);
    };
    handleChange(e) {
        console.log(e.target.value);
        console.log(e.target.id);
        var value = e.target.value;
        var name = e.target.id
        this.state.status[name]=value
        //console.log(this.state.status)
         this.setState({status:this.state.status});
    }
    validate = () => {
      let EmailError = "";
      let passwordError = "";
      if (!this.state.status.Email) {
        return EmailError = alert("Email is empty")
      }
      if (!this.state.status.password) {
        return passwordError = alert("password is empty")
      }
      if(EmailError || passwordError){
        console.log("inside false state")
        this.setState({ EmailError, passwordError });
        return false;
      } else {
        return true;
      }
    }
   

    saveData(event) {
        console.log(this.state.status)
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
         console.log("heloooo from save");
       
      var that = this;
  
        $.ajax({
          url: "http://localhost:8000/signupO",
          type: "POST",
          data: that.state.status,
          datatype: "json",
          success: function(data) {
            console.log(data);
            window.location.href = "/ownerMain";
            alert("welcome to Houjzat!")
            console.log("hi from success!!")
          },
          error:function(err){
            alert("already exist!")
            console.log("user already exist!")
          }
        }); 
      }
      else {
        alert("Some fields are empty");
      }
    }
  
  

    render(){
        return(
          <React.Fragment>
     
          <NavU />
              <div>   
              <br/>
         <br/>      
            <form className="ui form" onSubmit={this.saveData.bind(this)}>
            <br/>
           <br/>
           <br/>
           <br/>
              <div className="field">
                  <input id="Email" className="inp" placeholder="Email" onChange={this.handleChange} />
              </div>
              <br/>
              <div className="field">
                  <input id="password" className="inp" placeholder="password" onChange={ this.handleChange} />
              </div>
              <br/>
              <div className="field">
                  <div className="ui checkbox">
                  <input type="checkbox" className="inp" className="hidden" readOnly="" tabIndex="0" />
                  <label id="inp">I agree to the Terms and Conditions</label>
                  </div>
              </div>
              <br/>
              <button type="Submit"  id="inp" className="ui button">SignUp</button>
              <br/>
  
              </form>
              <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
            <Footer />
          </div> 
          </React.Fragment> 
        )
    }
}

export default SignupO;