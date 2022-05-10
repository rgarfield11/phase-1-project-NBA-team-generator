// NBA Team Generator

const playersUrl = "https://www.balldontlie.io/api/v1/players";
const teamsUrl = "https://www.balldontlie.io/api/v1/teams";
const teamsList = document.querySelector("#teams");


document.addEventListener("DOMContentLoaded", (e) => {
    fetch(`${playersUrl}?per_page=100`)
    .then(resp => resp.json())
    .then(players => console.log(players));

    fetch(teamsUrl)
    .then(res => res.json())
    .then(teams => {
        console.log(teams);
        teams.data.forEach((team) => {
            renderTeam(team)
        })
    })

    const renderTeam = team => {
            // const li = document.createElement("li");
            // li.textContent = TEAM INFO
            // teamsList.append(li); 
            // li.addEventListener("click")
            console.log(team);
    }

})

