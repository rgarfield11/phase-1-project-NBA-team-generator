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
const nbaLogo = document.querySelector("#nbaLogo")
let players1 = [];

document.addEventListener("DOMContentLoaded", (e) => {
    fetch(`${playersUrl}?per_page=100`)
    .then(resp => resp.json())
    .then(players => players1 = players.data);


    fetch(teamsUrl)
    .then(res => res.json())
    .then(teams => {
        teams.data.forEach((team) => {
            renderTeam(team);
        })
    })

    const renderTeam = team => {
            const li = document.createElement("td");
            li.textContent = team.abbreviation;
            teamsList.append(li); 
            li.addEventListener("click", () => {
                clickCity.textContent = team.city;
                clickName.textContent = team.name;
                clickConference.textContent = team.conference;
                clickDivision.textContent = team.division;
                
            })
            
    
    }

    nbaLogo.addEventListener('click', () => {
        const newAudioElement = document.createElement('audio')
        newAudioElement.src = "./src/NBA_on_TNT.mp3#t=00:00:32"
        newAudioElement.play()
    })

    
    reviewForm.addEventListener("submit", (e) => handleFormSubmit(e));
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const city = document.createElement('h3');
        city.innerText = e.target.city_name.value;
        randomTeamContainer.append(city);

        const name = document.createElement('h2');
        name.innerText = e.target.team_name.value;
        randomTeamContainer.append(name);

        const conference = document.createElement('h5');
        conference.innerText = e.target.conference.value;
        randomTeamContainer.append(conference);

        const division = document.createElement('h5');
        division.innerText = e.target.division.value;
        randomTeamContainer.append(division);

        const button = document.createElement('button');
        button.innerText = "Choose your starting 5";
        randomTeamContainer.append(button);

        button.addEventListener("click", () => {

            startingFive(players1);
        })
        
    }
    
    
    const startingFive = players => {
        for (let i = 0; i < 5; i++) {
            randomInt = Math.floor(Math.random() * 100);
            const player = players[randomInt]

            const randomPlayer = document.createElement('li');
            randomPlayer.innerText = `${player.first_name} ${player.last_name}`
            randomTeamContainer.append(randomPlayer);
          }
    }
})

