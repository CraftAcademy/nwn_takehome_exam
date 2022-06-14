describe('visitor can search and see news type', () => {
  
  
  beforeEach(() => {
    cy.intercept("GET", "https://newsapi.org/v2/everything**", {
      fixture: "search_response.json",
    }).as("userSearch");
    cy.visit("/");
     cy.get("[data-cy=search_field]").type("business");
     cy.get("[data-cy=search_button]").click();
  })
  it("is expected to make a GET request to the API", () => {
    cy.wait("@userSearch")
      .its("request.method")
      .should("eq", "GET")
      .and("response.statusCode")
      .should("eq", 200);
  });

    it("is expected to see 20 list items", () => {
      cy.get("[data-cy=articles_list]").children().should("have.length", 4);
    });
})