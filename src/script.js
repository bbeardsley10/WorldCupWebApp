const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "271bb211cfmsh0ce82e9b880a6afp1401ebjsnd857d545f245",
    "X-RapidAPI-Host": "fifa-2022-schedule-and-stats.p.rapidapi.com",
  },
};

const userInput = document.querySelector("input");
const btn = document.querySelector("button");

let params = "";

const callParams = () => {
  params = userInput.value;
  fetch(
    `https://fifa-2022-schedule-and-stats.p.rapidapi.com/schedule?date=${params}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      //let output = '';
      //let output2 = '';
      //  const homeTeam1 = []
      //  const awayTeam1 = []
      //console.log(data[0].matches[0]);
      const list = data.matches;
      //const list2 = data.matches.GroupName

      let counter = 0;
      list.map((match) => {
        //console.log(match.matches);
        //const homeTeam1 = match.Home.ShortClubName;
        //const awayTeam1 = match.Away.ShortClubName;
        console.log(match);
        const homeTeam = match.Home.TeamName[0].Description;
        const homeScore = match.Home.Score;
        const awayTeam = match.Away.TeamName[0].Description;
        const awayScore = match.Away.Score;
        console.log(homeTeam);
        console.log(awayTeam);
        console.log(homeScore);
        counter++;
        const gameNumber = `<h4> Game ${counter}: </h4>`;
        const game = `<h4> Home Team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Away Team </h4><h4> ${homeTeam} (${homeScore})&nbsp;&nbsp; vs.&nbsp;&nbsp; ${awayTeam} (${awayScore})</h4><h4></h4>`;
        document.querySelector(".Home").innerHTML += gameNumber;
        document.querySelector(".Home").innerHTML += game;
      });
    })
    .catch((err) => console.error(err));
  userInput.value = "";
};

btn.addEventListener("click", callParams);
