import React, { Component, PropTypes } from 'react'
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import $ from "jquery";
import Footer from "./footer";
import NavOut from "./navout"
import "./signup.css"

class Logout extends Component {
  constructor (props) {
    super(props)

    this.state = {
      redirect: false

    }
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleSubmit (event) {
    $.ajax({
      type: 'GET',
      url: '/logout',
      data: {
        redirect: this.state.redirect
      },
      success: (data) => {
        console.log(data)
        if (data) {
          console.log('byebye')
          window.location.href = '/'
        }
      },
      error: (err) => {
        console.log('errlogout ', err)
      }
    })
    event.preventDefault()
  }

  render () {
  
    return (
      <div>
         <NavOut />
        <form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2 id='logout' >Are you sure you want to log out !! </h2>
          <div className='row' >
            <Link to="/">
            <button  type='submit' className='inp'>Log out</button>
            </Link>
          </div>
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
        
<Footer />
      </div>
    )
  };
}

export default Logout
