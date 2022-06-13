describe("Display news from searching", () => {
  before(() => {
    cy.intercept("GET", "https://newsapi.org/v2/everything**", {
      fixture: "newsSearch_response.json",
    });
    cy.visit("/");
    cy.get("[data-cy=input_search]").type("bitcoin");
    cy.get("[data-cy=search_btn]").click();
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=news-header]").should("contain", "News Wire Network");
  });
  it("is expected to see 20 list items", () => {
    cy.get("[data-cy=articles]").children().should("have.length", 20);
  });

  describe("can see list of news", () => {
    it("is expected to see first article", () => {
      cy.get("[data-cy=articles]")
        .first()
        .within(() => {
          cy.get(".image").should("exist");
          cy.get(".header").should(
            "contain",
            "S&P 500 Falls Into Bear Market: Live Updates"
          );
          cy.get(".description").should("exist");
        });
    });
  });
});