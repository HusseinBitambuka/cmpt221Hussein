const gameData=require('../models/gameData');
const gameController=require('../controllers/gameController')

// load the currentgamedata
let currentGameData=gameController.currentGameData;
// Player Names:
// Get player names 
gameController.names = [];
exports.getAllPlayerNames = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(gameController.names);
}

// Save player name
exports.savePlayerName = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	gameController.names.push(req.body.name);
    res.send(req.body);
}
currentGameData.playerNames = gameController.names; // current data update
// Save start month:
exports.saveStartMonth = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    currentGameData.startMonth = req.body.month;
    res.send(currentGameData.startMonth);
}
// save profession month
exports.saveProfession = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var profession = gameData.professions[req.params.ProfessionId];
    currentGameData.playerProfession = profession[0]; // profession name
    currentGameData.playerMoney = profession[1]; // profession $$
    res.send(profession);
}