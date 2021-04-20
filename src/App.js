import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Home from './home.js'; 
import Kevin from './kevin.js'; 
import Nuggets from './nuggets.js'; 
import Banner from './banner.js';
import Footer from './footer.js';
import Navbar from './NavBar.js';
import './App.css';
 
function App() {
  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
  

        <Route exact path="/" component={Home} />
        <Route path="/kevin" component={Kevin} />
        <Route path="/nuggets" component={Nuggets} />
  
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
                                          

            <Link to="/" className="item">Home</Link>
            <Link to="/kevin" className="item">Kevin Durant</Link>
            <Link to="/nuggets" className="item">Denver Nuggets</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}
 
export default App;
