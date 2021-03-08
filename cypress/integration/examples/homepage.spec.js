
context('HOME PAGE', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept({
      method: 'GET',
      url: 'https://api.sportsdata.io/v3/mlb/scores/json/Players/CHC?key=b37a9e7224fa4a63900203ee59666bc2'
    }, {
      statusCode: 200,
      body: '../fixtures/wholeTeamData.json'
    })
  })

  it('should display the header', () => {
    cy.get('.header')
      .should('exist')
      .contains('WHO\'S THAT CUB?')
  })

  it('should display the select menu', () => {
    cy.get('.select-player')
      .should('exist')
  })

  it('should display the player card front', () => {
    cy.get('a[class=card-front]')
      .should('exist')
      .get('h1[class=card-title]')
      .should('exist')
      .contains('CUBS')
      .get('div[class=player-picture-box]')
      .should('exist')
      .get('div[class=loading]')
      .should('exist')
      .get('img[class=player-picture]')
      .should('exist')    
      .get('img[class=player-favorited]')  
      .should('exist')    
      .get('div[class=player-position]')
      .should('exist')
      .get('span[class=position-letters]')
      .should('exist')
      .get('img[class=position-baseball]')
      .should('exist')
      .get('h2[class=player-name]')
      .should('exist')
  })

  it('should display favorites buttons', () => {
    cy.get('.make-favorite-button')
      .should('exist')
      .contains('this one is my favorite')
    cy.get('.show-favorite-button')
      .should('exist')
      .contains('show me my favorite')
  })
})
  
context('SELECT A PLAYER', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept({
      method: 'GET',
      url: 'https://api.sportsdata.io/v3/mlb/scores/json/Players/CHC?key=b37a9e7224fa4a63900203ee59666bc2'
    }, {
      statusCode: 200,
      body: '../fixtures/wholeTeamData.json'
    })
  })

  it('should display the chosen player', () => {
    cy.get('img[class=player-picture]')
      .should('be.visible')    
      .get('span[class=position-letters]')
      .contains('SS')
      .should('exist')
      .get('h2[class=player-name]')
      .contains('JAVIER BÁEZ #9')
    
    cy.get('.select-player')
      .type('Kris Bryant {enter}')
      .wait(3000)

    cy.get('img[class=player-picture]')
      .should('be.visible')  
      .get('span[class=position-letters]')
      .contains('3B')
      .should('exist')
      .get('h2[class=player-name]')
      .contains('KRIS BRYANT #17')
  })
})

context('VIEW THE PLAYER\'S STATS', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept({
      method: 'GET',
      url: 'https://api.sportsdata.io/v3/mlb/scores/json/Players/CHC?key=b37a9e7224fa4a63900203ee59666bc2'
    }, {
      statusCode: 200,
      body: '../fixtures/wholeTeamData.json'
    })
  })

  it('should display the back of the chosen player card', () => {
    cy.get('img[class=player-picture]')
      .click()
      .get('div[class=card-back-header]')
      .should('exist')
      .get('img[class=card-back-action-photo]')
      .should('exist')
      .should('be.visible')
      .get('h3[class=card-back-player-name]')
      .should('exist')
      .contains('JAVIER BÁEZ')
      .get('div[class=card-back-stats-block]')
      .should('exist')
      .get('div[class=card-back-height]')
      .should('exist')
      .contains('He is 6\' 0\" tall and weighs 190lbs.')
      .get('div[class=card-back-batting]')
      .should('exist')
      .contains('He bats right-handed.')
      .get('div[class=card-back-throwing]')
      .should('exist')
      .contains('He throws right-handed')
      .get('div[class=card-back-birthday]')
      .should('exist')
      .contains('He was born in Bayamon, Puerto Rico on 12/1/1992')
      .get('div[class=card-back-high-school]')
      .should('exist')
      .contains('High school: Arlington Country Day (FL)')
      .get('div[class=card-back-college]')
      .should('exist')
      .contains('No college listed.')
      .get('div[class=card-back-experience]')
      .should('exist')
      .contains('He has played in the majors for 6 years')
      .get('div[class=card-back-salary]')
      .should('exist')
      .contains('He is making $609,000 this year.')
  })
})

context('FAVORITE A PLAYER', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept({
      method: 'GET',
      url: 'https://api.sportsdata.io/v3/mlb/scores/json/Players/CHC?key=b37a9e7224fa4a63900203ee59666bc2'
    }, {
      statusCode: 200,
      body: '../fixtures/wholeTeamData.json'
    })
  })

  it('should add the favorite icon only to the favorite player', () => {
    cy.get('img[class=player-favorited]')  
      .should('be.visible')    
    cy.get('div[class=player-footer]')  
      .should('exist')
    
    cy.get('.select-player')
      .type('Anthony Rizzo {enter}')
    cy.get('img[class=player-favorited]')
      .should('not.exist')

    cy.get('.make-favorite-button')
      .click()

    cy.get('img[class=player-favorited]')  
      .should('be.visible')    
    cy.get('div[class=player-footer]')  
      .should('exist')

    cy.get('.select-player')
      .type('Javier Baez {enter}')
    cy.get('img[class=player-favorited]')
      .should('not.exist')
  })
})
