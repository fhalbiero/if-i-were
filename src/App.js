import React, {Component} from 'react';

import {Card} from './components/card/card';
import {NameBox} from './components/name-box/name-box';

import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      nameField : "",
      type: "1",
      showCard: false
    }
  }


  handleChange = event => {
    this.setState({nameField : event.target.value, showCard: false}); 
  }

  handleSelectChange = event => {
    this.setState({type: event.target.value, showCard: false});
  }

  handleClick = () => {
    if (this.state.nameField === "") {
      alert("You need insert your name first!");
    } else {
      this.setState({showCard : !this.state.showCard})
    } 
  }

  
  render() {

      const {nameField, type, showCard} = this.state;
  
      return (
        <div className="App">
          <div className="container">
            <h1>If I were a... </h1>
            <select onChange={this.handleSelectChange}> 
              <option value="1">Robot</option>
              <option value="2">Monster</option>
              <option value="4">Cat</option>
              <option value="5">Cartoon</option>
            </select>
          </div>  
          <NameBox 
            placeholder="Insert your name here..."
            handleChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Show my face</button>
         
          { showCard ? <Card name={nameField} type={type}/> : null }

        </div>
        
      );
  }
}

export default App;
