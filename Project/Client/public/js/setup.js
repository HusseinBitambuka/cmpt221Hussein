
document.getElementById('menu').addEventListener('click',myFirstFunction)
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