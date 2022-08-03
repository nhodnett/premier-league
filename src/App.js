import React, { Component } from 'react';
import TeamContainer from './components/TeamContainer';
// import TeamDetails from './components/TeamDetails';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      teams: [],
      teamDetails: {}
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

  // handleClick = (id) => {
  //   console.log(id)
  //   this.setState({ teamDetails: team.team })
  // }
  
  render() {
    console.log(this.state.teamDetails)
    return (
      <main className="App">
        <h1>My Old Man Said...</h1>

        {/* <TeamDetails team={this.state.teamDetails}/> */}

        <TeamContainer teams={this.state.teams} handleClick={this.handleClick}/>

      </main>
    );
  }
}

export default App;
