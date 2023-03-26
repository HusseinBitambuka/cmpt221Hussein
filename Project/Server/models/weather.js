// weather object as an abstraction
class Weather{
    constructor(id, type,chance,mileChange,healthChange){
        this.id=id;
        this.type=type;
        this.chance=chance;
        this.mileChange=mileChange
        this.healthChange=healthChange;
    }
}
// name of weather
var Clear = new Weather(1, 'Clear', 05, 0, 0);
var Cloudy = new Weather(2, 'Cloudy',0.3, 0, 0);
var Rain = new Weather(3, 'Rain', 0.1, -0.1, -0.5);
var HeavyRain = new Weather(4, 'Heavy Rain',0.1,-0.20, -0.1);
var Fog = new Weather(5, 'Fog', 0.05, -0.05, -0.03);
var HeavyFog = new Weather(6, 'Heavy Fog', 0.05, -0.10, -0.05);
var Snow = new Weather(7, 'Snow', 0.05, -0.20, -0.10);
var Hail = new Weather(8, 'Hail', 0.02, -0.30, -0.15);
var Sleet =  new Weather(9, 'Sleet', 0.02, -0.20, -0.10);
var BlowingSnow = new Weather(10, 'Blowing Snow', 0.01,-0.40, -0.20);
var Blizzard = new Weather(11, 'Blizzard', 0.01, -0.60, -0.30);
var Thunderstorm=new Weather(12, 'Thunderstorm', 0.01, -0.20, -0.10);
var Tornado=new Weather(13, 'Tornado', 0.01, -0.40, -0.20);
// all weather
module.exports=[Clear,Cloudy,Rain,HeavyRain,Fog,HeavyFog,Snow,Hail,Sleet,BlowingSnow,
    Blizzard,Thunderstorm,Tornado]

