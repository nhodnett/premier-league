import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TeamContainer from './components/TeamContainer';
import TeamDetails from './components/TeamDetails';
import Favorites from './components/Favorites';
import Error from './components/Error';
import { Route } from 'react-router-dom';
import './App.css';
import { getData } from './apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      teams: [],
      favorites: [], 
      error: false
    }
  }

  componentDidMount = () => {
    getData()
    .then(data => {
      this.checkResponse(data)
    })
    .catch(() => {
      console.log('error')
      this.setState({ error: true })
    })
  }
  
  
  checkResponse = (data) => {
    if (!data.teams || !data.teams.length) {
      this.setState({ error: true })
    } else {
      this.setState({ teams: data.teams })
    } 
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
    }})
    let teams = this.state.teams
    teams[foundIndex].isFavorited = false

    let filteredFavorites = this.state.favorites.filter(
      (favoriteTeam) => favoritedTeamId !== favoriteTeam.idTeam)
    
      this.setState({ favorites: filteredFavorites, teams: teams })
  }
  
  render() {
    return (

      <main className="App">
        
        <Navbar />

        {/* <article>
          Welcome to "My Old Man Said..." Click on a card below to get more detailed information about that team. If you would like to favorote a team, click the star at the top of the card and that team will be added to your favorites.
          Choose wisely to avoid a lifetime of misery..!
        </article> */}

        { this.state.error ? <Error /> 
        :
        <Route exact path='/'>        
          <TeamContainer 
          teams={this.state.teams} 
          addFavorite={this.addFavorite}
          removeFavorite={this.removeFavorite}
          />
        </Route> }

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
