describe('User can see a collection of news items', () => {
  it('', () => {
    cy.visit('/')
  })

  beforeEach(() => { 
    cy.intercept('GET', "http://newsapi.org/v2/top-headlines", {
    fixture: "topheadlines.json",}).as('getNewsHeadlines')
    cy.visit('/')
  })



  it('is expected to display a header showing the logo', () => {
    cy.get('[data-cy=header]').should('exist')
  })

  it('is expected to contain search box', () => {
    cy.get('[data-cy=search-box]').should('exist')
  })

  it('is expected to request data from a News API', () => {
    cy.get('[data-cy=search-box]').should('exist')
  })

  it('is expected to call a News API'), () => {
    cy.wait('@getNewsHeadlines').its('response.statusCode').should('eq', 200)
  }

  // it('is expected to show the top five news items from today', () => {
  //   cy.get('[data-cy=articles]').children().should('have.length', 5)
  //   cy.get('[data-cy=articles]').should('contain', '2022-06-21')
  // })

})
