/* eslint-disable no-undef */
context("SELECT A PLAYER", () => {
  it("should display the chosen player", () => {
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
    cy.get("img[class=player-picture]")
      .should("be.visible")
      .get("span[class=position-letters]")
      .contains("SS")
      .should("exist")
      .get("h2[class=player-name]")
      .contains("JAVIER BÁEZ #9")

    cy.get(".select-player")
      .type("Kris")
      .wait(1000)
    cy.get(".css-e71fk4-option").click()
      .wait(1000)

    cy.get("img[class=player-picture]")
      .should("be.visible")
      .get("span[class=position-letters]")
      .contains("3B")
      .should("exist")
      .get("h2[class=player-name]")
      .contains("KRIS BRYANT #17")
  })
})
