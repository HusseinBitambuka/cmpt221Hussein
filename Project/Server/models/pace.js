//Pace object as an abstraction
class Pace{
    constructor(name, miles, healthChange){
        this.name=name;
        this.miles=miles;
        this.healthChange=healthChange;
    }
}
// list of possible paces
var Steady=new Pace('Steady',50,-1);
var Strenuous=new Pace('Strenuous',30,-3);
var Grueling=new Pace('Grueling',10,-8);
var Resting=new Pace('Resting',0,5);
//all paces
module.exports=[Steady,Strenuous,Grueling,Resting]