/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* app.js
* used to create a new instance of the 'Game' class and
* add event listeners for the start button and onscreen keyboard buttons
* *** PROBABLY WHERE EX-CREDT KEY PRESS AND KEY UP EVENTS OCCUR***
*/


//test code

let game;
//who decided to give the ID a double underscore??  If this is conventional programming, explain it in a lesson.
const resetButton = document.getElementById('btn__reset');
resetButton.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});
