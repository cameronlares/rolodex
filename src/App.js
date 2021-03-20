
import './App.css';
import React, { Component } from 'react'
import {CardList} from './components/card-list/cardList'

class App extends Component {
  constructor() { 
    super();
    this.state = {
      monsters: [],
      searchField:'',
    }
  


  }
  // onchange(e){
  //   e.preventDefault()
  //   this.setState({ searchField:e.target.value})
  //   console.log(e.target.value)
  // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
      ;
  }
  render() {
    return (
      <div className="App">
        <input type='search' placeholder='search monsters' onChange={e=>this.setState({ searchField:e.target.value},()=> console.log(this.state))} />
        <CardList monsters= {this.state.monsters}>
      
        </CardList>
        
      </div>
    );
  }
}

export default App;
