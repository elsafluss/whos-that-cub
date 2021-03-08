import allPlayers from './WholeTeamData.json'
import javy from './javy.json'
export const online = false

export function getAllCubsPlayers() {
    if (online) {
        return fetch('https://api.sportsdata.io/v3/mlb/scores/json/Players/CHC?key=b37a9e7224fa4a63900203ee59666bc2')
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

// If there's nothing in localStorage, return Javy
// because he should be your favorite anyway.

export function getFromLocalStorage() {
    const storedPlayer = JSON.parse(localStorage.getItem('favoritePlayer'))
    if(!storedPlayer) {
        return javy
    } else {
        return storedPlayer
    }
}