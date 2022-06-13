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
    cy.get("[data-cy=news-list]").children().should("have.length", 20);
  });

  it("is expected to see first article", () => {
    cy.get("[data-cy=news-list]")
      .first()
      .within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").should(
          "contain",
          "How Do Bitcoin Transactions Work?"
        );
        cy.get(".description").should("exist");
      });
  });
  it("is expected to see last article", () => {
    cy.get("[data-cy=news-list]")
      .last()
      .within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").should(
          "contain",
          "Why Massive Bitcoin Miner Outflow Has This Top Quant Analyst “Scared”"
        );
        cy.get(".description").should("exist");
      });
  });
});
