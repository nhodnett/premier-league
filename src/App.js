import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      teams: []
    }
  }

  componentDidMount = () => {
    console.log('Did Mount')
    fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League`)
    .then(response => response.json())
    .then(data => {
        console.log(this.state.teams)
      this.setState({ teams: data.teams })
    })
  }
  
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
