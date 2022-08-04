import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TeamContainer from './components/TeamContainer';
import TeamDetails from './components/TeamDetails';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      teams: [],
      teamSelected: false,
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

  handleClick = (id) => {
    console.log('28', id)
    let selected = this.state.teams.find(team => {
      return team.idTeam === id
    })
    console.log('32', selected)
    // .find(), takes in an id. FInds the team by id
    //object - create property
    this.setState({ 
      teamSelected: true,
      teamDetails: selected
    })
  }
  
  render() {
    // console.log(this.state.teams)
    return (
      <main className="App">
        <Navbar />
        {this.state.teamSelected ?
        <TeamDetails details={this.state.teamDetails}/>
        //pass information into team details
          :
        <TeamContainer teams={this.state.teams} handleClick={this.handleClick}/>
        }
      </main>
    )
  }
}

export default App;
