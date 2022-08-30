import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TeamContainer from './components/TeamContainer';
import TeamDetails from './components/TeamDetails';
import Favorites from './components/Favorites';
import Error from './components/Error';
import { Route } from 'react-router-dom';
import './App.css';
import { getData } from './apiCalls';

const App = () => {
  const [teams, setTeams] = useState([])
  const [favorites, setFavorites] = useState([]) 
  const [error, setError] = useState(false)

  useEffect(() => {
    getData()
    .then(data => {
      checkResponse(data)
    })
    .catch(() => {
      console.log('error')
      setError(true)
    })
  }, [])
  
  const checkResponse = (data) => {
    if (!data.teams || !data.teams.length) {
      setError(true)
    } else {
      setTeams(data.teams)
    } 
  }

  const addFavorite = (favoritedTeam) => {
    let foundIndex = 0
    teams.forEach((team, index) => {
      if (team.idTeam === favoritedTeam.idTeam) {
        foundIndex = index
      }
    })
    let teamUpdate = teams
    teams[foundIndex].isFavorited = true
    setFavorites([...favorites, favoritedTeam], teamUpdate)
  }
  
  const removeFavorite = (favoritedTeamId) => {
    let foundIndex = 0
      teams.forEach((team, index) => {
    if (team.idTeam === favoritedTeamId) {
      foundIndex = index
    }})
    let teamUpdate = teams
    teams[foundIndex].isFavorited = false

    let filteredFavorites = favorites.filter(
      (favoriteTeam) => favoritedTeamId !== favoriteTeam.idTeam)    
      setFavorites(filteredFavorites, teamUpdate)
  }
  
  return (

    <main className="App">
      
      <Navbar />

      { error ? <Error /> 
      :
      <Route exact path='/'>        
        <TeamContainer 
        teams={teams} 
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        />
      </Route> }

      <Route exact path='/:idTeam'
        render={({ match }) => {
          return <TeamDetails 
                    id={match.params.idTeam} 
                    teams={teams}
                    />
        }}>
        </Route>

      <Route exact path='/teams/favorites'>
        <Favorites
          favorites={favorites}
          removeFavorite={removeFavorite}
          teams={teams}
        />
      </Route>

    </main>
  )
}

export default App;
