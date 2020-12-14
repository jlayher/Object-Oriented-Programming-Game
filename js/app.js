/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/** app.js
 * used to create a new instance of the 'Game' class and
 * add event listeners for the start button and onscreen keyboard buttons
 */


// Declare Variables
let game;
// Selects the key button elements' div for later event delegation
const qwerty = document.getElementById('qwerty');
// Selects all of the key button elements
const qwertyButtons = document.querySelectorAll('#qwerty button');
const resetButton = document.getElementById('btn__reset');

// Reset Button Listener
// Creates new game object, calls resetGame and startGame on the new game object
resetButton.addEventListener('click', () => {
  game = new Game();
  game.resetGame();
  game.startGame();
});

//Adds event listener to onscreen key buttons and calls handleInteraction
qwerty.addEventListener('click', (e) => {
  if (event.target.className === 'key'){
    game.handleInteraction(e.target);
  }
});

/**
 * Extra Credit Part 1, Added Keyboard Functionality
 */
window.addEventListener('keydown', (e) => {
  //testing regex against keyboard button to make sure it is a lowercase english letter
  if (/^[a-z]+$/.test(e.key)){
    for (let i=0; i<qwertyButtons.length; i++){
      //test if text content of quertyButton matches the value of the key pressed, and makes sure that the button is still enabled
      if (qwertyButtons[i].textContent === e.key && qwertyButtons[i].disabled === false){
        game.handleInteraction(qwertyButtons[i]);
      }
    }
  }
});
