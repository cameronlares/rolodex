
import './App.css';
import React, { Component } from 'react'
import {CardList} from './components/card-list/cardList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
      ]
    }



  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
      ;
  }
  render() {
    return (
      <div className="App">
        <CardList monsters= {this.state.monsters}>
      
        </CardList>
        
      </div>
    );
  }
}

export default App;
