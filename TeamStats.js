const team = {
    _players: [
      {firstName: 'Marcus',  lastName: 'Rashford', age: 25},
      {firstName: 'Bruno', lastName: 'Fernandes', age: 28}, 
      {firstName: 'Raphael',   lastName: 'Varane', age: 29}
    ],
    
    _games: [
      {opponent: 'Barcelona', teamPoints: 2, opponentPoints: 1}, 
      {opponent: 'Newcastle', teamPoints: 2, opponentPoints: 0}, 
      {opponent: 'West Ham', teamPoints: 3, opponentPoints: 1}
    ], 
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer (newFirstName, newLastName, newAge) {
      const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
  
      this.players.push(newPlayer);
    }, 
  
    addGame (newOpponent, newTeamPoints, newOpponentPoints) {
      const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
  
      this.games.push(newGame);
    }
  };
  
  //Testing method addPlayer():
  team.addPlayer('Lisandro', 'Martinez', 25);
  team.addPlayer('David', 'Degea', 32);
  team.addPlayer('Marcel', 'Sabitzer', 29);
  team.addPlayer('Luke', 'Shaw', 27);
  team.addPlayer('Diogo', 'Dalot', 24);
  team.addPlayer('Carlos', 'Casimiro', 31);
  team.addPlayer('Christian', 'Eriksen', 31);
  team.addPlayer('Anthony', 'Martial', 27);
  console.log(team.players);
  
  //Testing method addGame():
  team.addGame('Liverpool', 0, 7);
  team.addGame('Real Betis', 4, 1);
  team.addGame('Southampton', 0, 0);
  team.addGame('Real Betis', 1, 0);
  console.log(team.games);