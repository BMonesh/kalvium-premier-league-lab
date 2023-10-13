//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  return [managerName, managerAge, currentTeam, trophiesWon]
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if (formation.length==0){
    return null;
  }else{
    var fom = {
      defender : formation[0],
      midfield : formation[1],
      forward : formation[2]
    }
    return fom;
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(n){
  let playerdebut = [];
  for (i=0 ; i<players.length ; ++i ){
    if (players[i].debut == n){
      playerdebut.push(players[i]);
    }
  }return playerdebut;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(pos){
  let filterPlayers = [];
  for (let i = 0; i < players.length; i++){
    if (players[i].position == pos){
      filterPlayers.push(players[i])
    }
  }
  return filterPlayers;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(AN){
  let awardWinners = [];
  for (let i = 0; i < players.length; i++){
      for (let j = 0; j <players[i].awards.length; j++){
        if (players[i].awards[j].name == AN){
          awardWinners.push(players[i]);
        }
    }
  }
  if (AN == undefined){
    awardWinners = [];
  }
  return awardWinners;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(AN, nOT){
  let xtimes =[ ];
  for (let i = 0; i < players.length; i++) {
    let Ot = 0; 
    for (let j = 0; j < players[i].awards.length; j++){
      if (players[i].awards[j].name == AN){
        Ot++;
      }
    }
    for (let z = 0; z < players[i].awards.length; z++){
      if (players[i].awards[z].name == AN && Ot == nOT){
        xtimes.push(players[i]);
        break
      }
    }
  }
  return xtimes; 
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(AN,con){
  let player_award = filterByAward(AN)
  let player_award_country = [ ]
  for (let i=0 ; i < player_award.length ; i++){
    if (player_award[i].country == con){
      player_award_country.push(player_award[i])
    }  
  }
  if (AN == undefined || con == undefined){
    player_award_country == []
  }
  return player_award_country
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____\
function filterByNoOfAwardsxTeamxAge(noaward,team,age){
  var ans = [ ]
  console.log(noaward,team,age)
  for (let i=0 ; i<players.length ; i++){
    if (players[i].age < age && players[i].team == team && players[i].awards.length >= noaward ){
      ans.push(players[i])
      console.log(ans)
    }
  }
  return ans
}

//Progression 9 - Sort players in descending order of their age
function age(item1,item2){
  return item2.age-item1.age
}
function AgeSorter(){
  var age_sort = players.sort(age(a,b))
  return age_sort
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamnamexNoofAwards(team){
  var team_member = players.filter(function(player){
    return player.team == team;
  })
  team_member.sort(age(a,b))

  return team_member
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function filterByAwardsxNOofAwardsxName(award,no,country){
  let number_award = filterByAwardxTimes(award,no)
  let name_country = number_award.filter(function(i){
    return i.country == country
  })

  return name_countrycountry

}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function filterByNamexAgeOlder(age){
  let more_age = players.filter(function(i){
    return i.age>age
  })
  m.sort(function(a){
    return a.name
  })

  let old = players.filter(function(items){
    return items.awards.sort(function (a,b){
      return a.year - b.year; 
  })
})
return old
}