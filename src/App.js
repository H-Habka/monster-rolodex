import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      name : "hossien",
      age: "22"
    }
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello { this.state.name } your age is {this.state.age}
        </p>
        <button onClick= { () => {this.setState({
          name: (this.state.name == "hasan")?"hossien": "hasan",
          age:"25"
          
          })}}>Click to change text</button>
      </header>
    </div>
    );
  }
}

export default App;
