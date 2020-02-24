import React from 'react'
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'



class NavO extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        // redirect: false
      }
    }
    render () {
          
        const navStyle ={
            color :"Black",
            fontSize: "20px"
        }
        return (
            <div>
                           <nav>
                <Link style={navStyle} to="/">
                <h1 className="logo">Hojozat.com</h1>
                </Link>
                <ul className="nav-links">
                    <Link style={navStyle} to="/about">
                   <li>About</li>
                    </Link>
                    <Link style={navStyle} to="/about">
                   <li>Contact</li>
                    </Link>
                </ul>
            </nav>


                
            </div>
        )
    }
}


    export default NavO;

