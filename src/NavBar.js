import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home.js'; 
import Kevin from './kevin.js'; 
import Nuggets from './nuggets.js'; 
class Navbar extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
          nav_text:['Home', 'Kevin Durant', 'Denver Nuggets'],
          nav_urls:['/', '/kevin', '/nuggets'],
          current_nav:0, //current navigation id
          menu: false
      };
      this.listItems = this.state.nav_text.map( (value, index) =>

          <li className="nav-item">
            <Link to={this.state.nav_urls[index]} className="nav-link">{value}</Link>
          </li>

      
    
      );

      this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({menu: !this.state.menu})
  }
  
  render() {
    const show = (this.state.menu) ? "show" : "";
    return(
  
            <nav className="navbar sticky-top navbar-expand-sm bg-dark navbar-dark">
                <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse "+show} id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {this.listItems}
                    </ul>
                </div>
            </nav>
  
    
  
    );
    
  }
  }

export default Navbar
//   ReactDOM.render(
  
//       <Navbar/>,
//       document.getElementById("navbar")
//   );