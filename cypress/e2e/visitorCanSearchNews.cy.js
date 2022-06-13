describe('visitor can search and see news type', () => {
  
  
  beforeEach(() => {
    cy.intercept("GET", "https://newsapi.org/v2/everything**", {
      fixture: "search_response.json",
    });
    cy.visit("/");
  })

    it("is expected to see 20 list items", () => {
      cy.get("[data-cy=articles_list]").children().should("have.length", 4);
    });
})