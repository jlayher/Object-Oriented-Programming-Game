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
const qwerty = document.getElementById('qwerty');
const resetButton = document.getElementById('btn__reset');

resetButton.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

qwerty.addEventListener('click', (e) => {
  if (event.target.className === 'key'){
    game.handleInteraction(e.target);
  }
});


//select the keyboard buttons' container
//add a click event listener
//make sure that clicking the space between
//and around the onscreen keyboard buttons does not result in the method being called
//in the callback to the event listener,
  //call game.handleInteraction()

//!! go to handleInteraction, and add this code:
// handleInteraction(button) {
