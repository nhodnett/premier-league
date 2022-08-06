import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TeamContainer from './components/TeamContainer';
import TeamDetails from './components/TeamDetails';
import Favorites from './components/Favorites';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      teams: [],
      favorites: []
    }
  }

  componentDidMount = () => {
    console.log('Did Mount')
    fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League`)
    .then(response => response.json())
    .then(data => {
      this.setState({ teams: data.teams })
    })
  }

  addFavorite = (favoritedTeam) => {
    let foundIndex = 0
    this.state.teams.forEach((team, index) => {
    if (team.idTeam === favoritedTeam.idTeam) {
      foundIndex = index
    }
  })
    let teams = this.state.teams
    teams[foundIndex].isFavorited = true
    this.setState({ favorites: [...this.state.favorites, favoritedTeam], teams: teams })
  }
  
  removeFavorite = (favoritedTeamId) => {
    let foundIndex = 0
    this.state.teams.forEach((team, index) => {
    if (team.idTeam === favoritedTeamId) {
      foundIndex = index
    }
  })
    let teams = this.state.teams
    teams[foundIndex].isFavorited = false

    let filteredFavorites = this.state.favorites.filter(
      (favoriteTeam) => favoritedTeamId !== favoriteTeam.idTeam)
    
      this.setState({ favorites: filteredFavorites, teams: teams })
  }
  
  render() {
      console.log(this.state.favorites)
    return (
      <main className="App">
        
        <Navbar />

        <Route exact path='/'>
          <TeamContainer 
            teams={this.state.teams} 
            addFavorite={this.addFavorite}
            removeFavorite={this.removeFavorite}
            favorites={this.state.favorites}
          />
        </Route>

        <Route exact path='/:idTeam'
          render={({ match }) => {
            return <TeamDetails 
                      id={match.params.idTeam} 
                      teams={this.state.teams}
                      />
          }}>
          </Route>

        <Route exact path='/teams/favorites'>
          <Favorites
            favorites={this.state.favorites}
            removeFavorite={this.removeFavorite}
            teams={this.state.teams}
          />
        </Route>

      </main>
    )
  }
}

export default App;
