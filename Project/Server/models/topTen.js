//Player object as an abstraction
class Player{
    constructor(playerName, score, date) {
        this.playerName = playerName;
        this.score = score; 
        this.date = date; 
    }
}
//player
module.exports=function player(playerName, score, date){
    return new Player(playerName, score, date);
}

