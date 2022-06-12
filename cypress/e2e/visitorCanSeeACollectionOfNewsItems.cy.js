describe("Display news headlines", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines**", {
      fixture: "news_index.json",
    });
    cy.visit("/");
  });

  it("is expected to see 20 list items", () => {
    cy.get("[data-cy=articles]").children().should("have.length", 20);
  });

  describe("user can see list of news", () => {
    it("is expected to see first article", () => {
      cy.get("[data-cy=articles]")
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
  });
})