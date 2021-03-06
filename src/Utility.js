import allPlayers from './WholeTeamData.json'
export const online = false

export function getAllCubsPlayers() {
    if (online) {
        return fetch('https://api.sportsdata.io/v3/mlb/scores/json/Players/CHC?key=b37a9e7224fa4a63900203ee59666bc2')
        .then(response => response.json())
    } else {
        return allPlayers
    }
}

// do i care that i'm sending around a bunch of data that i don't care about?
// like XmlTeamPlayerID?

// ping action photo in a fetch for a status and if it's 404, then show either wrigley or the baseballs