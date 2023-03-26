//load models
var gameData = require('../models/gameData');
var terrains = require('../models/terrain');
var weather = require('../models/weather');
var paces= require('../models/pace');
//gameData at the begining of the game.
let names = [];
let playerStatus = [true, true, true, true, true];
let milesTraveled = 0;
let groupHealth = 100;
let daysOnTrail = 0;
let messages = [];
exports.currentGameData = gameData(names, playerStatus, "", "", "", milesTraveled,
    groupHealth, paces[0], daysOnTrail, weather[2], terrains[2], 
    messages);

// Get Game Data:
exports.getGameData = function(req, res) {
    // return json of the game data
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.send(exports.currentGameData);
}
//all paces
exports.paces=function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(paces);
}
// Change Pace
exports.changePace = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    exports.currentGameData.currentPace =paces[req.params.paceId];
    res.send(exports.currentGameData.currentPace);
}
// Reset Game:
exports.resetGame = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    // reset
    names = [];
    exports.currentGameData.playerNames = names;
    playerStatus = [true, true, true, true, true]
    exports.currentGameData.playerStatus =playerStatus;
    exports.currentGameData.playerProfession = "";
    exports.currentGameData.playerMoney = "";
    exports.currentGameData.startMonth = "";
    milesTraveled = 0;
    exports.currentGameData.milesTraveled = milesTraveled;
    groupHealth = 100;
    exports.currentGameData.groupHealth = groupHealth;
    exports.currentGameData.currentPace = paces[0];
    daysOnTrail = 0;
    exports.currentGameData.daysOnTrail =daysOnTrail;
    exports.currentGameData.currentWeather = weather[2];
    exports.currentGameData.currentTerrain = terrains[2];
    messages = [];
    exports.currentGameData.messages = messages;
    
    res.send(exports.currentGameData);
}