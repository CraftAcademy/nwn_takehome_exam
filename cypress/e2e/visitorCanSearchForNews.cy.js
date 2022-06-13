describe("Display news from searching", () => {
  before(() => {
    cy.intercept("GET", "https://newsapi.org/v2/everything**", {
      fixture: "newsSearch_response.json",
    });
    cy.visit("/");
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=news-header]").should("contain", "News Wire Network");
  });
});