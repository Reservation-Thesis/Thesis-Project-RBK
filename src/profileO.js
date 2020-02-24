import React from 'react'
import image from './image.js'
import $ from "jquery";

class PO extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        user: []
      }
    }


    componentDidMount () {
        var that = this
        var user = this.props.userName
        console.log(user)
        $.ajax({
          url: '/ProfileU',
          method: 'GET'
        })
          .done(function (data) {
            console.log(data)
            that.setState({
              user: data
            })
          })
          .fail(function (err,data) {
            alert('No user Found')
          })
      }
    
      render () {
          var user = this.state.user
          var email = user.email
          var image = user.image
       
    
          return (
    
          <div className="container" id = "profile">
            <div className="row">
            <div className="panel panel-default">
            <div className="panel-heading"><h4 >User Profile</h4></div>
            <div className="panel-body">
            <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
            <div className="col-md-3">
              <img image={image} />
              <div className='col-md-9'>
              <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
              <hr/>
              <ul className="container details" >
              <p className="glyphicon glyphicon-envelope">  Email :{email}</p>
              <br/>
              </ul>
              <hr/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
          )
      }
    }


    export default PO;