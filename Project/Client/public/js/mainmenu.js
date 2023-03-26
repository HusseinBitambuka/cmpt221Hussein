//add the first event on the first list element
document.getElementById('first').addEventListener('click',myFirstFunction)
//add the second event on the second list element
document.getElementById('second').addEventListener('click',mySecondFunction)
//add the third event on the third list element
document.getElementById('third').addEventListener('click',myThirdFunction)
//add the third event on the third list element
document.getElementById('sound').addEventListener('click',myFourthFunction)
// open the trail tab 
function myFirstFunction(){
   window.location='/trail';
}
// open the menu setup tab 
function mySecondFunction(){
   window.location='/setup';
}
//open the topten tab
function myThirdFunction(){
    window.location='/topten';
 }
 // update sound status
 function myFourthFunction(){
    window.location='/setup';
 }