import React from 'react';
import './App.css';
import Navbar from "./Nav";
import About from "./About";
import Album from "./Home";
import AppF from "./AppF";
import Login from "./login";
import LoginO from "./loginO"
import SignupU from "./signup";
import SignupO from "./signupO";
import Logout from "./logout";
import NavU from "./navU";
import NavO from "./navO";
import PU from "./profileU";
import PO from "./profileO";
import Owner from "./owner";
import NestedList from "./list";
import Item from "./Item";
import ListItem from "./ListItem";
import ItemComponent from "./itemComponent"
import ShopCalender from "./shopCalender";
import MediaCard from "./cardForItem";
import Calender from "./Calender";
import Appointments from "./appointments";
import Auth from "./Auth"
import UserMain from "./userMain"
import NavAS from "./navAfterSU"
import NavASO from "./navAfterSO"
import OwnerMain from "./ownerMain"
import shops from "./AppF";
import ProceedToCheckout from "./ProceedToCheckout"
import Checkout from "./Checkout"
import AddressForm from "./addressForm";
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App">
   
     <Switch>
          <Route path="/" exact component={Album} />
          <Route path="/about" component={About} />
          <Route path="/AppF" component={AppF} />
          <Route  path='/signup' component={SignupU} />
          <Route  path='/signupO' exact component={SignupO} />
          <Route  path='/login' exact component={Login} />
          <Route  path='/loginO' exact component={LoginO} />
          <Route  path='/logout' exact component={Logout} />
          <Route  path='/navU' exact component={NavU} />
          <Route  path='/navO' exact component={NavO} />
          <Route  path='/profileU'exact component={PU} />
          <Route  path='/profileO'exact component={PO} />
          <Route  path='/owner' exact component={Owner} />
          <Route  path='/list' exact component={NestedList} />
          <Route  path='/:id2' exact component={shops} />
          <Route  path='/id' exact component={shops} />
          <Route  path='/:id/:id' exact component={ItemComponent} />
          {/* <Route  path='/item/:id' exact component={ItemComponent} /> */}
          <Route path="/Appointments" exact component={Appointments} />
          <Route path="/Calender" exact component={Calender} />
          <Route path="/MediaCard" exact component={MediaCard} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/ShopCalender" exact component={ShopCalender} />
          <Route path="/userMain" exact component={UserMain} />
          <Route path="/ownerMain" exact component={OwnerMain} />
          <Route path="/navAfterSU" exact component={NavAS} />
          <Route path="/navAfterSO" exact component={NavASO} />
          <Route path="/ProceedToCheckout" exact component={ProceedToCheckout} />
          <Route path="/addressForm" exact component={AddressForm} />
          <Route path="/Checkout" exact component={Checkout} />        
      </Switch>
    </div>
    </Router>
    );
}


export default App;
