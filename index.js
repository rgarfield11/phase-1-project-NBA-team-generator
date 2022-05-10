// NBA Team Generator

const playersUrl = "https://www.balldontlie.io/api/v1/players";
const teamsUrl = "https://www.balldontlie.io/api/v1/teams";
const teamsList = document.querySelector("#teams");
const clickCity = document.querySelector('#click_city');
const clickName = document.querySelector('#click_name');
const clickConference = document.querySelector('#click_conference');
const clickDivision = document.querySelector('#click_division');



document.addEventListener("DOMContentLoaded", (e) => {
    fetch(`${playersUrl}?per_page=100`)
    .then(resp => resp.json())
    .then(players => console.log(players));

    fetch(teamsUrl)
    .then(res => res.json())
    .then(teams => {
        console.log(teams);
        teams.data.forEach((team) => {
            renderTeam(team);
        })
    })

    const renderTeam = team => {
            const li = document.createElement("li");
            li.textContent = team.abbreviation;
            teamsList.append(li); 
            li.addEventListener("click", () => {
                clickCity.textContent = team.city;
                clickName.textContent = team.name;
                clickConference.textContent = team.conference;
                clickDivision.textContent = team.division;
            })
    
    }

    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault()
        createLi1.innerText = e.target.review.value
    })

})

