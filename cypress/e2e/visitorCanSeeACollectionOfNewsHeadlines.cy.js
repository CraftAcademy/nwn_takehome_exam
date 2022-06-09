describe("user can see collection of top news headlines ", () => {

  cy.visit("/");

  it("is expected to make a GET request to the API", () => {
    cy.wait("@getArticles").its("request.method").should("eq", "GET");
  });
  
});
