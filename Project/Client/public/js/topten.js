document.getElementById('return').addEventListener('click',myFirstFunction)
document.addEventListener('keydown',myFunction1)
// press 'press space bar to return to menu' text to return to the menu 
function myFirstFunction(){
    window.location='/mainmenu';
}
// press the space bar to return to menu
function myFunction1(key){
    if (key.code=='Space'){
    window.location='/mainmenu';
}
}
//topten members 
let topten=[
{name:'Hussein',score:11,date:new Date('2022-11-06')},
{name:'Kimoshori',score:12,date:new Date('2022-11-07')},
{name:'Mido', score:13,date:new Date('2022-11-08')},
{name:'Magicien', score:14,date:new Date('2022-11-09')},
{name:'Kimo',score:15, date:new Date('2022-11-10')},
{name:'Element', score:16, date:new Date('2022-11-11')},
{name:'Monsieur', score:17, date:new Date('2022-11-12')},
{name: 'Houstonly', score:18, date:new Date('2022-11-13')},
{name:'Houston',score:19, date:new Date('2022-11-14')},
{name:'Bitambuka',score:20, date:new Date('2022-11-15')}
]
//sort the array by score
topten.sort(
    (p1, p2) => {return p1.score-p2.score;});
//add the top ten members in our table
for (let i=0; i<topten.length; i++){
    //creating row and cells
    let table=getElement=document.getElementById('topten');
    let tableRaw=document.createElement('tr');
    let tableData1=document.createElement('td');
    let cell1=document.createTextNode(topten[i].name);
    let tableData2=document.createElement('td');
    let cell2=document.createTextNode(topten[i].score)
    let tableData3=document.createElement('td');
    let cell3=document.createTextNode(topten[i].date);
    // apending the cells and rows
    tableData1.appendChild(cell1);
    tableData2.appendChild(cell2);
    tableData3.appendChild(cell3);
    tableRaw.appendChild(tableData1);
    tableRaw.appendChild(tableData2);
    tableRaw.appendChild(tableData3);
    table.appendChild(tableRaw);
}

