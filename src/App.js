import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello( props){
//   return <p>{props.title}</p>
// }

// const Hello = (props) => <p>{props.title}</p>

class Hello extends Component {
  render(){
    return <p>{this.props.title}</p>;
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Bienvenidos al Curso de React Native"/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
