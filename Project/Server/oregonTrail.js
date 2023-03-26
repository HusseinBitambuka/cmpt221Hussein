const express = require('express')
const app = express()
const port = 1337
var bodyParser = require('body-parser');
const game=require('../Server/controllers/gameController');
const setupController = require('./controllers/setupController');
const topTenController = require('./controllers/topTenController');


app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static('Client/public'));
app.get('/', function (req, res) {
  res.sendFile('index.html', {root: './Client/views' })
  })  
app.get('/mainmenu', function (req, res) {
  res.sendFile('mainmenu.html', {root: './Client/views' })
  })
app.get('/setup', function (req, res) {
  res.sendFile('setup.html', {root: './Client/views' })
  })
app.get('/topten', function (req, res) {
  res.sendFile('topten.html', {root: './Client/views' })
  })
app.get('/trail', function (req, res) {
    res.sendFile('trail.html', {root: './Client/views' })
    })
// get game data
app.route('/api/game/gameData')
   .get(game.getGameData);
// change pace
app.route('/api/game/paces/:paceId')
   .post(game.changePace);

// reset game
app.route('/api/game/resetGame')
    .get(game.resetGame);


// get and save player
app.route('/api/setup/player')
    .get(setupController.getAllPlayerNames)
    .post(setupController.savePlayerName);
// save start month
app.route('/api/setup/month')
    .post(setupController.saveStartMonth);
// save profession
app.route('/api/setup/profession/:ProfessionId')
    .post(setupController.saveProfession);
// get the top ten list
app.route('api/topTen')
    .get(topTenController.getTopTen)
// save the top ten list
app.route('api/topTen')
    .post(topTenController.saveTopScore)

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)});