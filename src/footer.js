import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_text:['Home', 'Kevin Durant', 'Denver Nuggets'],
            nav_urls:['/', '/kevin', '/nuggets'],
            current_nav:0 //current navigation id
        };
        this.year = new Date();
        this.year = this.year.getFullYear();
    }

    render() {
        return (
            <p className="text-center">
                <span>|</span>
                {
                    this.state.nav_text.map( (text, index) =>
                    <span>&nbsp;<Link to={this.state.nav_urls[index]}>{text}</Link>|</span>
                )}
            <span> &nbsp;&nbsp; &copy; {this.year}</span>
            </p>
        );
    }
}

export default Footer