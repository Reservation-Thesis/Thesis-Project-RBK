import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
 export default function  NavASO() {   
          const navStyle ={
              color :"Black",
              fontSize: "20px"
          }
                 const menuId = 'primary-search-account-menu';

          return(
              
            <nav>
                <Link style={navStyle} to="/">
                <h1 className="logo">Hojozat.com</h1>
                </Link>
                <ul className="nav-links">
                  
                    <Link style={navStyle} to="/about">
                   <li>About</li>
                    </Link>

                    <Link style={navStyle} to="/owner">
                   <li>Add Item</li>
                    </Link>

                    <Link style={navStyle} to="/logout">
                    <Button>Logout</Button>
                    </Link> 

                    <Link to="/profileO">
                    <IconButton aria-controls={menuId}  color="black" >
              <AccountCircle />
             </IconButton>
             </Link>
                </ul>
            </nav>     
          )
      }
