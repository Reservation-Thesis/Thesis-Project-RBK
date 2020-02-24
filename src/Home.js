import React from 'react';
import $ from "jquery";
import { BrowserRouter as Route,Link } from 'react-router-dom';
import "./App.css"
import Navbar from "./Nav";
import Footer from "./footer"


class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    var that = this;
  }
  componentDidMount() {
    var that = this;
    var id = window.location.href.split('=')[1];
    $.ajax({
      url:"http://localhost:8000/",
      type: "GET",
      dataType: "JSON",
      success: function(data) {
        //   console.log(data);
        that.setState({ data: data });
        console.log(that.state.data);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
  render(){
    console.log(this.state.data)
    const listItems = this.state.data.map((mainSchema) =>
    <div >
    <img className='img' src={mainSchema.mainComImg} ></img>
    <p >{mainSchema.mainComDis}</p>
    <button><Link to={`/${mainSchema.id}`}>EXPLORE MORE</Link>
</button>    <br></br>
    <br></br>
    </div>
  );
    return (
      <div>
                      <Navbar/>
         <ul className='yara' >
            {listItems}
        </ul>
        <Footer />
      </div>
       
    )
}
}          


export default Album;
