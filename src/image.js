import React from 'react'
import $ from 'jquery'

class image extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image: '',
      user: []
    }
    this.uploadPhoto = this.uploadPhoto.bind(this)
  }
//   componentDidMount () {
//     var that = this
//     var user = this.props.image
//   }
  uploadPhoto (photo) { // post the photo and get the photo in the same time
    var that = this
    console.log('state,this', this.state)
    var file = photo.target.files[0]
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function (e) {
      $.ajax({
        url: '/updateImage',
        type: 'PUT',
        data: JSON.stringify({image: that.state.image}),
        contentType: 'application/json',
        success: function (data) {
          console.log('dataaaaaaaaaaa', data)
        }
      })
      that.setState({image: e.target.result})
    }
  }
  render () {
    return (
      <div>
        <img src={this.state.image || 'http://sba.scfhs.org.sa/publiceservice_enu/CustomPages/Profileuploader/static/images/default.jpg'} style={{width: '200px'}} />
        <form>
          <input type='file' onChange={this.uploadPhoto} />
        </form>
      </div>

    )
  }
}
export default image;
