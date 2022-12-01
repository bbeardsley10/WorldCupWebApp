const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '271bb211cfmsh0ce82e9b880a6afp1401ebjsnd857d545f245',
		'X-RapidAPI-Host': 'fifa-2022-schedule-and-stats.p.rapidapi.com'
	}
};

const userInput = document.querySelector('input');
const btn = document.querySelector('button');


let params = ''

const callParams = () => {

    params = userInput.value
    fetch(`https://fifa-2022-schedule-and-stats.p.rapidapi.com/schedule?date=${params}`, options)
        .then(response => response.json())
        .then(data => {
             //let output = '';
             //let output2 = '';
            //  const homeTeam1 = []
            //  const awayTeam1 = []

            const list = data.matches
            //const list2 = data.matches.GroupName
            let counter = 0
            list.map((match) => {
                //console.log(match)
                const homeTeam1 = match.Home.ShortClubName
                const awayTeam1 = match.Away.ShortClubName
                const GroupName = match.GroupName
                counter++
                const gameNumber = `<h4> Game ${counter}: </h4>`
                const game = `<h4> Home Team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Away Team </h4><h4> ${homeTeam1}&nbsp;&nbsp; vs.&nbsp;&nbsp; ${awayTeam1}</h4>`
                //console.log(homeTeam1)
                //console.log(awayTeam1)
                console.log(GroupName)
                document.querySelector('.Home').innerHTML += gameNumber
                document.querySelector('.Home').innerHTML += game
            })

            // list2.map((matches) => {
            //     const GroupName = matches.GroupName.Description

            //     console.log(GroupName)
            // })
            // data.matches.forEach(match => {
                //console.log(match.Home.IdCountry)

                // homeTeam1.push(match)
                // awayTeam1.push(match.Away.IdCountry)

                //  console.log(homeTeam1)
                // console.log(awayTeam1)


                // output += `
                // <h4>
                //     ${match.Home.IdCountry}
                // </h4>
                
                // `
                // output2 += `
                // <h4>
                //     ${match.Away.IdCountry}
                // </h4>

                //`
                //})
                //document.querySelector('.Home').innerHTML = "Home Team " + homeTeam1
                    //document.querySelector('.Home').innerHTML = "Home Team " +output;
                    //document.querySelector('.Away').innerHTML = "Away Team " + output2;
                    // document.querySelector('.Home2').innerHTML = "Home Team " +output;
                    // document.querySelector('.Away2').innerHTML = "Away Team " + output2;
            })
        .catch(err => console.error(err));
    userInput.value = '';

}


btn.addEventListener('click', callParams)


