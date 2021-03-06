import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kade Hurst",
      title: "Junior Studying Bachelor of Computer Science",
      univer_url: 'http://www.coloradomesa.edu',
      univer_logo: '/assets/cmu-logo.png'
    }
  }

  render() {
    const imgStyle = {
      position: "absolute",
      top: "5px", 
      left: "10px",
      height: "75px"
    };

    return (
      <div>
        <a href={this.state.univer_url} target="_blank" rel="noreferrer">
          <img src={this.state.univer_logo} style={imgStyle} alt="University Logo"/>
        </a>
        <h1 id='name'>{this.state.name}</h1>
        <p>{this.state.title}</p>
      </div>
    );
  }
}
export default Banner