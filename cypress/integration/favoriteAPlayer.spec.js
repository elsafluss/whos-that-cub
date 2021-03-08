/* eslint-disable no-undef */

// NOTE: If you run this test more than once
context("FAVORITE A PLAYER", () => {
  it("should add the favorite icon only to the favorite player", () => {
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
    cy.get("img[class=player-favorited]").should("be.visible")
    cy.get("div[class=player-footer]").should("exist")

    cy.get(".select-player").type("Anthony ").wait(1000)
    cy.get(".css-e71fk4-option").click().wait(1000)
    
    cy.get("img[class=player-favorited]").should("not.exist")

    cy.get(".make-favorite-button").click()

    cy.get("img[class=player-favorited]").should("be.visible")
    cy.get("div[class=player-footer]").should("exist")

    cy.get(".select-player").type("Javier").wait(1000)
    cy.get(".css-e71fk4-option").click().wait(1000)

    cy.get("img[class=player-favorited]").should("not.exist")
  })
})
