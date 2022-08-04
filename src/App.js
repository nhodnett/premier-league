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
      teamSelected: false,
      teamDetails: {},
      favorites: []
    }
  }

  componentDidMount = () => {
    console.log('Did Mount')
    fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League`)
    .then(response => response.json())
    .then(data => {
        // console.log(this.state.teams)
      this.setState({ teams: data.teams })
    })
  }

  // handleClick = (id) => {
  //   // console.log('28', id)
  //   let selected = this.state.teams.find(team => {
  //     return team.idTeam === id
  //   })
  //   // console.log('32', selected)
  //   this.setState({ 
  //     teamSelected: true,
  //     teamDetails: selected
  //   })
  // }

  addFavorite = (favoritedTeam) => {
    this.setState({ favorites: [...this.state.favorites, favoritedTeam] })
  }

  removeFavorite = (favoritedTeam) => {
    let filteredFavorites = this.state.favorites.filter(favoriteTeam => favoritedTeam.idTeam !== favoriteTeam.id)
    this.setState({favorites: filteredFavorites})
  }
  
  render() {
    // console.log(this.state.teams)
    return (
      <main className="App">
        <Navbar />
        <Route path='/'>

          <TeamContainer 
            teams={this.state.teams} 
            addFavorite={this.addFavorite}
            removeFavorite={this.removeFavorite}
            favorites={this.state.favorites}
            handleClick={this.handleClick}
          />
        </Route>

        <Route exact path='/teamdetails'

          render={({ match }) => {
            <TeamDetails id={match.params.id} />
          }}>
          </Route>

        <Route exact path='/favorites'>
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
