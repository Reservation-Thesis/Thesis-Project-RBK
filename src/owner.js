import React from "react";
import $ from "jquery";
import "./App.css"
import NavASO from "./navAfterSO";
import Footer from "./footer"
class Owner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: {
        name: "",
        location: "",
        price: "",
        openingHours: "",
        capacity: "",
        contactInfo: "",
        description: "",
        imageSlider: [],
        NameError: "",
        locationError: "",
        priceError: "",
        openingHoursError: "",
        capacityError: "",
        contactInfoError: "",
        descriptionError: "",
        imageSliderError: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log("target value>> ", e.target.value);
    console.log("target id>> ", e.target.id);
    var value = e.target.value;
    var name = e.target.id;
    this.state.status[name] = value;
    console.log(this.state.status);
    this.setState({ status: this.state.status });
    console.log("after");
    console.log(this.state.status);
  }
  validate = () => {
    let NameError = "";
    let locationError = "";
    let priceError = "";
    let openingHoursError = "";
    let capacityError = "";
    let contactInfoError = "";
    let descriptionError = "";
    let imageSliderError = "";
    if (!this.state.status.name) {
      return NameError = alert("name is empty")
    }
    if (!this.state.status.location) {
      return locationError = alert("location is empty")
    }
    if (!this.state.status.price) {
      return priceError = alert("price is empty")
    }
    if (!this.state.status.openingHours) {
      return openingHoursError = alert("openingHours is empty")
    }
    if (!this.state.status.capacity) {
      return capacityError = alert("capacity is empty")
    }
    if (!this.state.status.contactInfo) {
      return contactInfoError = alert("contactInfo is empty")
    }
    if (!this.state.status.description) {
      return descriptionError = alert("description is empty")
    }
    if (!this.state.status.imageSlider) {
      return imageSliderError = alert("image is empty")
    }
    if (NameError || locationError || priceError || openingHoursError || capacityError || contactInfoError || descriptionError || imageSliderError) {
      console.log("inside false state")
      this.setState({ NameError, locationError, priceError, openingHoursError, capacityError, contactInfoError, descriptionError, imageSliderError });
      return false;
    } else {
      return true;
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.status)
      var that = this;
      $.ajax({
        url: "http://localhost:8000/shops",
        type: "POST",
        data: that.state.status,
        dataType: "json",
        success: function (data) {
          console.log(data);
          alert("Added successfully!!")
          console.log("hi from success!!")
        },
        error: function (err) {
          alert("error ya Ola");
          console.log("error ya 2lby");
        }
      })
    }
    else {
      alert("Some fields are empty");
    }
  }
  render() {
    return (
      <div >
        <NavASO />
        <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
        
            <div id="h11" >
              <h1 id="h1">Here You Can Add Item</h1>
            </div>
            <div>
              <input
                text-align="center"
                id="name"
                placeholder="name"
                value={this.state.status.name}
                type="text"
                onChange={this.handleChange}
              /></div>
            <div style={{ color: "red" }}>
              {this.state.status.NameError}
            </div>
            <div><input
              id="location"
              type="url"
              value={this.state.status.location}
              placeholder="location url"
              onChange={this.handleChange}
            /></div>
            <div style={{ color: "red" }}>
              {this.state.status.locationError}
            </div>
            <div>
              <input
                id="price"
                placeholder="price"
                value={this.state.status.price}
                type="number"
                onChange={this.handleChange}
              /></div>
            <div style={{ color: "red" }}>
              {this.state.status.priceError}
            </div>
            <div>
              <input
                id="capacity"
                placeholder="capacity"
                value={this.state.status.capacity}
                type="number"
                onChange={this.handleChange}
              /></div>
            <div style={{ color: "red" }}>
              {this.state.status.capacityError}
            </div>
            <div>
              <input
                id="contactInfo"
                type="number"
                value={this.state.status.contactInfo}
                placeholder="contactInfo"
                onChange={this.handleChange}
              /></div>
            <div style={{ color: "red" }}>
              {this.state.status.contactInfoError}
            </div>
            <div>
              <input
                id="description"
                placeholder="description"
                value={this.state.status.description}
                type="text"
                onChange={this.handleChange}
              /></div>
            <div style={{ color: "red" }}>
              {this.state.status.descriptionError}
            </div>
            <div>
              <input
                id="imageSlider"
                placeholder="imageSlider"
                value={this.state.status.imageSlider}
                type="text"
                onChange={this.handleChange}
              /></div>
            <div style={{ color: "red" }}>
              {this.state.status.imageSliderError}
            </div>
            <div>
              <input
                id="openingHours"
                placeholder="openingHours"
                value={this.state.status.openingHours}
                type="text"
                onChange={this.handleChange}
              /></div>
            <div>
              <button id="button" type="Submit" size="50">
                Add Item
          </button></div>
          </div>
          <Footer />
        </form>
      </div>
    );
  }
}
export default Owner;





