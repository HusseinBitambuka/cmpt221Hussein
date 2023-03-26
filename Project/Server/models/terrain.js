class Terrain{
    constructor(name){
        this.name=name;
    }
    
    milesTraveled(){
        if (this.name=='steady'){
            return 50;
        }
        else if(this.name=='strenuous'){
            return 30;
        }
        else if(this.name=='grueling'){
            return 10;
        }
        else{
            return 0;
        }
    }
    paceChange(){
        if (this.name=='mountains'){
            return -20;
        }
        else if(this.name=='grassland'){
            return -15;
        }
        else if(this.name=='plains'){
            return -10;
        }
        else if(this.name=='forest'){
            return -5;
        }
        else{
            return 0;
        }
    }
    healthChange(){
        if (this.name=='mountains'){
            return -5;
        }
        else if(this.name=='grassland'){
            return -2;
        }
        else if(this.name=='plains'){
            return -1;
        }
        else if(this.name=='forest'){
            return -3;
        }
        else{
            return -4;
        }
    }
}
var Mountains=new Terrain('mountains');
var Grassland=new Terrain('grassland');
var Plains=new Terrain('plains');
var Forest=new Terrain('forest');
var Desert=new Terrain('desert');
var allTerrain=[Mountains.name,Grassland.name
    ,Plains.name,Forest.name,Desert.name];

module.exports={
    Plains:Plains,
    Grassland:Grassland,
    Mountains:Mountains,
    Forest:Forest,
    Desert:Desert,
    allTerrain:allTerrain
}