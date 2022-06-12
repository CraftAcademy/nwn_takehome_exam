describe("user can see collection of top news headlines ", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines**", {
      fixture: "news_index.json",
    }).as("getNewsFeed");
    cy.visit("/");
  });

  it("is expected to make a GET request to the API", () => {
    cy.wait("@getNewsFeed").its("request.method").should("eq", "GET");
  });
  it("is expected to display a collection of 20 articles", () => {
    cy.get("[data-cy=news-list]")
      .children()
      .should("have.length", 20);
  });
});
