// for development, comment-in lines 3 and 20-21 here
// and change line 5 to false so you don't hit the API
// import allPlayers from "./WholeTeamData.json"
import javy from "./javy.json"
export const online = true

export function getAllCubsPlayers() {
  if (online) {
    return fetch(
      `https://api.sportsdata.io/v3/mlb/scores/json/Players/CHC?key=${process.env.REACT_APP_API_KEY}`
    ).then((response) => {
      if (response.status >= 400 && 500 >= response.status) {
        throw new Error("User Error")
      } else if (response.status >= 500) {
        throw new Error("Server Error")
      } else {
        return response.json()
      }
    })
  // } else {
  //   return allPlayers
  }
}

export function saveToLocalStorage(data) {
  localStorage.setItem("favoritePlayer", JSON.stringify(data))
}

// If there's nothing in localStorage, return Javy
// because he should be your favorite anyway.

export function getFromLocalStorage() {
  const storedPlayer = JSON.parse(localStorage.getItem("favoritePlayer"))
  if (!storedPlayer) {
    return javy
  } else {
    return storedPlayer
  }
}
