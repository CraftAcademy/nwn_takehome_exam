describe("user can see collection of top news headlines ", () => {

  

  it("is expected to make a GET request to the API", () => {
    cy.visit("/");
    cy.wait("@getNewsArticles").its("request.method").should("eq", "GET");
  });

});
