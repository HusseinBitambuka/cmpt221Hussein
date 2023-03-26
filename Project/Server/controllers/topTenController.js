var topTen = require('../models/topTen')
// get top scores:
exports.getTopTen = function(req, res) {
    let scores = [];
    let sql = "select * from scores;";
    con.query(sql, (err, rows,) => {
        if (err) throw err;
        for (let i = 0; i < rows.length; i++) {
            let individualScore = topTen(rows[i].playerName, rows[i].score, rows[i].date);
            scores.push(individualScore);
        }
        console.log(scores);

        res.setHeader('Content-Type', 'application/json');
        res.send(scores);
    })
    
}
// Save top Scores:
exports.saveTopScore = function(req, res) {
    let sql = "insert into scores (playerName, score, date) "
        + "values ('"
            + req.body.playerName + "', '"
            + parseInt(req.body.score) + "', '"
            + req.body.date 
        + "');";
    con.query(sql, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.setHeader('Content-Type', 'application/json');
        res.send(result);
    })
}
