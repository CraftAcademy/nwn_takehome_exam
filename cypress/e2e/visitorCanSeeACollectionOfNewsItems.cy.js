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
})