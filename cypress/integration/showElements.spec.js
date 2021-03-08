/* eslint-disable no-undef */
context("HOME PAGE", () => {
  it("should display the header", () => {
    cy.intercept(
      "GET",
      "https://api.sportsdata.io/v3/mlb/scores/json/Players/CHC?key=b37a9e7224fa4a63900203ee59666bc2",
      { fixture: "../fixtures/wholeTeamData.json" },
      {
        statusCode: 200,
        body: "../fixtures/wholeTeamData.json",
      }
    )
    cy.visit("http://localhost:3000")
    cy.get(".header").should("exist").contains("WHO'S THAT CUB?")
  })

  it("should display the select menu", () => {
    cy.get(".select-player").should("exist")
  })

  it("should display the player card front", () => {
    cy.get("a[class=card-front]")
      .should("exist")
      .get("h1[class=card-title]")
      .should("exist")
      .contains("CUBS")
      .get("div[class=player-picture-box]")
      .should("exist")
      .get("div[class=loading]")
      .should("exist")
      .get("img[class=player-picture]")
      .should("exist")
      .get("img[class=player-favorited]")
      .should("exist")
      .get("div[class=player-position]")
      .should("exist")
      .get("span[class=position-letters]")
      .should("exist")
      .get("img[class=position-baseball]")
      .should("exist")
      .get("h2[class=player-name]")
      .should("exist")
  })

  it("should display favorites buttons", () => {
    cy.get(".make-favorite-button")
      .should("exist")
      .contains("this one is my favorite")
    cy.get(".show-favorite-button")
      .should("exist")
      .contains("show me my favorite")
  })
})
