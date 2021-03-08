context("FAVORITE A PLAYER", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.intercept(
      {
        method: "GET",
        url:
          "https://api.sportsdata.io/v3/mlb/scores/json/Players/CHC?key=b37a9e7224fa4a63900203ee59666bc2",
      },
      {
        statusCode: 200,
        body: "../fixtures/wholeTeamData.json",
      }
    )
  })

  it.only("should add the favorite icon only to the favorite player", () => {
    cy.get("img[class=player-favorited]").should("be.visible")
    cy.get("div[class=player-footer]").should("exist")

    cy.get(".select-player").type("Anthony Rizzo").type("{enter}")
    cy.get("img[class=player-favorited]").should("not.exist")

    cy.get(".make-favorite-button").click()

    cy.get("img[class=player-favorited]").should("be.visible")
    cy.get("div[class=player-footer]").should("exist")

    cy.get(".select-player").type("Javier Baez").type("{enter}")
    cy.get("img[class=player-favorited]").should("not.exist")
  })
})
