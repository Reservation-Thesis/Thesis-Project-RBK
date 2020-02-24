import React from 'react';
import { BrowserRouter as Route,Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./App.css"
import NavASO from "./navAfterSO";
import Footer from "./footer"
import $ from "jquery"

class OwnerMain extends React.Component {
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
        <Link to="/ProceedToCheckout">
          <Button>ProceedToCheckout</Button>
        </Link>
                  <NavASO/>
         <ul className='yara' >
            {listItems}
        </ul>
        <Footer />
      </div>
       
    )
}
}          


export default OwnerMain;