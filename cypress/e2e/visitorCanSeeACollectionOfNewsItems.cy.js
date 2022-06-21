describe("User can see a collection of news items", () => {
  it("", () => {
    cy.visit("/");
  });

  it('is expected to display a header showing the logo', () => {
    cy.get('[data-cy=header]').should('exist')
  })

  it('is expected to contain search box', () => {
    cy.get('[data-cy=search-box]').should('exist')
  })

});
