describe('premier-league', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League', {fixture: 'teams'})
    cy.visit('http://localhost:3000/')
  })

  it('should display a title of My Old Man Said...', () => {
    cy.get('h1').should('have.text', 'My Old Man Said...')
  })

  it('should display all the Premier League teams when the page loads', () => {
    cy.get('.team-container').find('.card').should('have.length', 4)
  })

  it('should go to a team details page when a user clicks on a specific team card', () => {
    cy.get('.team-container').find('.card').eq(1).click()
    cy.url().should('eq', 'http://localhost:3000/133601')
  })

  it('should be able to navigate using the arrow buttons', () => {
    cy.get('.team-container').find('.card').eq(1).click()
    cy.go('back')
    cy.get('.team-container').find('.card').should('have.length', 4)
    cy.go('forward')
    cy.get('.name').should('contain', 'Aston Villa')
    cy.get('.year-formed').should('contain', '1874')
  })

  it('should navigate back to the main page from the team details page when a user clicks the header', () => {
    cy.get('.team-container').find('.card').eq(0).click()
    cy.url().should('eq', 'http://localhost:3000/133604')
    cy.get('h1').click()
    cy.get('.team-container').find('.card').should('have.length', 4)
  })
  
  it('should add a team to the favorites file when a user clicks the team star icon', () => {
    cy.get('.team-container').find('.card').eq(1).find('.star-button').click()
    cy.get('.nav-bar').find('.favorites-button').click()
    cy.url().should('eq', 'http://localhost:3000/teams/favorites')
  })

  it('should be able to navigate back to the main page from the favorites page when a user clicks the header', ()=> {
    cy.get('.team-container').find('.card').eq(3).find('.star-button').click()
    cy.get('.nav-bar').find('.favorites-button').click()
    cy.url().should('eq', 'http://localhost:3000/teams/favorites')
    cy.get('h1').click()
    cy.get('.team-container').find('.card').should('have.length', 4)
  })

  it('should remove a team from the favorites file when a user clicks the team star icon again', () => {
    cy.get('.team-container').find('.card').eq(2).find('.star-button').click()
    cy.get('.nav-bar').find('.favorites-button').click()
    cy.url().should('eq', 'http://localhost:3000/teams/favorites')
    cy.get('.favorite-container').find('.card').should('have.length', 1).find('.star-button').click()
    cy.get('.favorite-container').find('.card').should('have.length', 0)
  })

  it('should return an error message if a network request fails', () => {
    cy.intercept('GET', 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League', {
        statusCode: 404,
        body: {
          error: true
        }
      })
      .get('.error').should('have.text', 'OFFSIDE!Sorry, there was an error loading the page. Please click this link, or refresh to try again...')
  })

})