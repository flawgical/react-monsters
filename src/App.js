import React, { Component } from 'react';
import { CardList } from './components/car-list/card-list.component'
import './App.css';

class App extends Component {

    state = {
      monsters: []
     }
  
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState( { monsters: users }))
     }

  render(){
      return (
        <div className="App">
          <CardList monsters={this.state.monsters} />
         
        </div>
      );
  }
}

export default App;
