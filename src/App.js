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

class Text extends Component {
  render(){
    const {
      arrayOfNumbers,
      boolean,
      multiply,
      number,
      objectWithInfo,
      text
    } = this.props;

    const isTexto = boolean ? "Verdadero" : "Falso";
    const mappedArray = arrayOfNumbers.map(multiply);
    return(
    <div>
        <p>{text}</p>
        <p>{number}</p>
        <p>{isTexto}</p>
        <p>{arrayOfNumbers.join(", ")}</p>
        <p>{mappedArray.join(", ")}</p>
        <p>{objectWithInfo.key}</p>
    </div>
    )
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
          <Text
            arrayOfNumbers={[2,3,4,5]}
            text="Text en string"
            number={2}
            boolean={false}
            objectWithInfo={{key:'uno',key2:'dos'}}
            multiply={num => num *3}
          />
        </header>
      </div>
    );
  }
}

export default App;
