// NBA Team Generator

const playersUrl = "https://www.balldontlie.io/api/v1/players";
const teamsUrl = "https://www.balldontlie.io/api/v1/teams";
const teamsList = document.querySelector("#teams");
const clickCity = document.querySelector('#click_city');
const clickName = document.querySelector('#click_name');
const clickConference = document.querySelector('#click_conference');
const clickDivision = document.querySelector('#click_division');
const randomTeamContainer = document.querySelector('#random_team');
const reviewForm = document.querySelector("#randomize");



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

    
    reviewForm.addEventListener("submit", (e) => handleFormSubmit(e));
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const city = document.createElement('h2');
        city.innerText = e.target.city_name.value;
        randomTeamContainer.append(city);

        const name = document.createElement('h1');
        name.innerText = e.target.team_name.value;
        randomTeamContainer.append(name);

        const conference = document.createElement('h4');
        conference.innerText = e.target.conference.value;
        randomTeamContainer.append(conference);

        const division = document.createElement('h4');
        division.innerText = e.target.division.value;
        randomTeamContainer.append(division);

        const button = document.createElement('button');
        button.innerText = "Choose your starting 5";
        randomTeamContainer.append(button);

        button.addEventListener("click", () => {

            const pg = document.createElement('li');
            randomTeamContainer.append(pg);

            const sg = document.createElement('li');
            randomTeamContainer.append(sg);

            const sf = document.createElement('li');
            randomTeamContainer.append(sf);

            const pf = document.createElement('li');
            randomTeamContainer.append(pf);

            const ce = document.createElement('li');
            randomTeamContainer.append(ce);

            
        })




    }

})

