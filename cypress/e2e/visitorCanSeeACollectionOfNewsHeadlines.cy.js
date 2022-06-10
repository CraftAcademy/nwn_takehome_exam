describe("user can see collection of top news headlines ", () => {

   beforeEach(() => {
     cy.intercept("GET", "**/top-headlines/**", {
       fixture: "news_index.json",
     }).as("getNewsFeed");
     cy.visit("/");
   });

  it("is expected to make a GET request to the API", () => {
    
    cy.wait("@getNewsFeed").its("request.method").should("eq", "GET");
  });

});
