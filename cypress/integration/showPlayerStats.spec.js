/* eslint-disable no-undef */
context("VIEW THE PLAYER'S STATS", () => {
  it("should display the back of the chosen player card", () => {
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
      .click()
      .get("div[class=card-back-header]")
      .should("exist")
      .get("img[class=card-back-action-photo]")
      .should("exist")
      .should("be.visible")
      .get("h3[class=card-back-player-name]")
      .should("exist")
      .contains("JAVIER BÁEZ")
      .get("div[class=card-back-stats-block]")
      .should("exist")
      .get("div[class=card-back-height]")
      .should("exist")
      .contains("He is 6' 0\" tall and weighs 190lbs.")
      .get("div[class=card-back-batting]")
      .should("exist")
      .contains("He bats right-handed.")
      .get("div[class=card-back-throwing]")
      .should("exist")
      .contains("He throws right-handed")
      .get("div[class=card-back-birthday]")
      .should("exist")
      .contains("He was born in Bayamon, Puerto Rico on 12/1/1992")
      .get("div[class=card-back-high-school]")
      .should("exist")
      .contains("High school: Arlington Country Day (FL)")
      .get("div[class=card-back-college]")
      .should("exist")
      .contains("No college listed.")
      .get("div[class=card-back-experience]")
      .should("exist")
      .contains("He has played in the majors for 6 years")
      .get("div[class=card-back-salary]")
      .should("exist")
      .contains("He is making $609,000 this year.")
  })
})
