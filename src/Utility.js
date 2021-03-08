import allPlayers from './WholeTeamData.json'
import javy from './javy.json'
export const online = false

export function getAllCubsPlayers() {
    if (online) {
        return fetch('httpasdfs://api.sportsdata.io/v3/mlb/scores/json/Players/CHC?key=b37a9e7224fa4a63900203ee59666bc2')
        .then(response => {
            if (response.status >= 400 && 500 >= response.status) {
                throw new Error("User Error")
            } else if (response.status >= 500) {
                throw new Error("Server Error")
            } else {
                return response.json()
            }
        })
    } else {
        return allPlayers
    }
}

export function saveToLocalStorage(data) {
    localStorage.setItem('favoritePlayer', JSON.stringify(data))
}

export function getFromLocalStorage() {
    saveToLocalStorage(javy)
    return JSON.parse(localStorage.getItem('favoritePlayer'))
}
// This puts a player (a good one) into local storage for the first time a user opens the app