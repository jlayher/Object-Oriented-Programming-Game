/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* app.js
* used to create a new instance of the 'Game' class and
* add event listeners for the start button and onscreen keyboard buttons
* *** PROBABLY WHERE EX-CREDT KEY PRESS AND KEY UP EVENTS OCCUR***
*/

//test code

const logPhrase = (phrase) => {
  console.log(`Phrase - phrase: `, phrase.phrase);
};

const game = new Game();

logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
