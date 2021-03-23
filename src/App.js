import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/cardList";
import {SearchBox}  from "./components/search-box/search-box"
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',


    };
  }
 handleChange= (e) => { //use arrow function, it automatically bind, automatically lexical scope
   e.preventDefault()
  this.setState({ searchField: e.target.value }, () =>
    console.log(this.state)
  )
 }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    //equavilent of this.state.monsters
    //equavilent of this.state.searchField
    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder = "search monsters" handleChange ={this.handleChange}/>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
