//add an event the 'press the space bar' event
document.getElementById('press').addEventListener('click',myFunction);
// add the space bar event to go the menu page
document.addEventListener('keydown',myFunction1)

// open the menu tab 
function myFunction(){
   window.location='/mainmenu';
}
// press the space bar to return to menu
function myFunction1(key){
   if (key.code=='Space'){
   window.location='/mainmenu';
}
}
let checker=true
while (checker){
   $('#press').fadeOut(900).fadeIn(900);
}
