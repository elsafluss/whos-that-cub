context("SELECT A PLAYER", () => {
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

  it("should display the chosen player", () => {
    cy.get("img[class=player-picture]")
      .should("be.visible")
      .get("span[class=position-letters]")
      .contains("SS")
      .should("exist")
      .get("h2[class=player-name]")
      .contains("JAVIER BÁEZ #9")

    cy.get(".select-player").type("Kris Bryant").type("{enter}").wait(3000)

    cy.get("img[class=player-picture]")
      .should("be.visible")
      .get("span[class=position-letters]")
      .contains("3B")
      .should("exist")
      .get("h2[class=player-name]")
      .contains("KRIS BRYANT #17")
  })
})
