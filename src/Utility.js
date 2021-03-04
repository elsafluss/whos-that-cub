export function getAllCubsPlayers() {
    return fetch('https://api.sportsdata.io/v3/mlb/scores/json/Players/CHC?key=b37a9e7224fa4a63900203ee59666bc2')
    .then(response => response.json())
}