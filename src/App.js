import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max213', age: 28},
      { name: 'Mad', age: 23 },
      { name: 'Mand', age: 24 },
    ],
    otherState: 'some other value'
  }
  switchNameHandler = (newName) =>{
    //console.log('was clicked');
    this.setState({
      persons: [
        { name: newName, age: 223 },
        { name: 'Mad111', age: 243 },
        { name: 'Mand333', age: 245 },
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 23 },
        { name: event.target.value, age: 24 },
        { name: 'Mand333', age: 25 },
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <button onClick ={() => this.switchNameHandler('maximum111')}>switch name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
          click = {this.switchNameHandler.bind(this, 'Max!!!!')}
          changed = {this.nameChangedHandler}
          />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
  //return React.createElement('div', {className: 'App'}, 'Hi, I\'m a React App!')
  }
}

export default App;
