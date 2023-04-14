export const getData = () => {
    return fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League`)
    .then(response => response.json())
}
