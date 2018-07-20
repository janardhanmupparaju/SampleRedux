import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      name:'janardhan'
    }
  }
  componentDidMount(){
  
    this.props.getname(this.state.name)
  }
  render() {

    console.log("this is app.js reducer name",this.props.name_reducer)

    console.log("this is App.js name",this.state.name)

    this.props.getname(this.state.name)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.props.name_reducer}</p>
      </div>
    );
  }
}

export default App;
