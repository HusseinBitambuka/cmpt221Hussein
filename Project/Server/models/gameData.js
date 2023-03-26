// Game Data object as an abstraction
class gameData{
 constructor(playerNames, playerStatus, playerProfession, playerMoney, startMonth, milesTraveled, 
    groupHealth, currentPace, daysOnTrail, currentWeather, currentTerrain, messages) {
    this.playerNames = playerNames; // names of the five players (in a array)
    this.playerStatus = playerStatus; // current status of each player (in a array)
    this.playerProfession = playerProfession; // profession at start
    this.playerMoney = playerMoney; // amount of money the team has
    this.startMonth = startMonth; // month the game starts at start
    this.milesTraveled = milesTraveled; // distance traveled
    this.groupHealth = groupHealth; // team health
    this.currentPace = currentPace; // current pace (use pace object)
    this.daysOnTrail = daysOnTrail; // how many days (1 day = 1 update) has the wagon team been on the trail
    this.currentWeather = currentWeather; // assign the current weather for this update (use weather object)
    this.currentTerrain = currentTerrain; // assign the current terrain for this update (use terrain object)
    this.messages = messages; // text to show the user on the client side
    }
}

module.exports=function Gamedata(playerNames, playerStatus, playerProfession, playerMoney, startMonth, milesTraveled, 
    groupHealth, currentPace, daysOnTrail, currentWeather, currentTerrain, messages){
        
        return new gameData(playerNames, playerStatus, playerProfession, playerMoney, startMonth, milesTraveled, 
            groupHealth, currentPace, daysOnTrail, currentWeather, currentTerrain, messages);
    }
const banker = ["banker", 2000];
const carpenter = ["carpenter", 1800];
const farmer = ["farmer", 1500];
exports.professions = [];
    
exports.professions.push(banker);
exports.professions.push(carpenter);
exports.professions.push(farmer);
