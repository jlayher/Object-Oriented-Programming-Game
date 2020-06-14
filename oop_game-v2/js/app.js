/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* app.js
* used to create a new instance of the 'Game' class and
* add event listeners for the start button and onscreen keyboard buttons
* *** PROBABLY WHERE EX-CREDT KEY PRESS AND KEY UP EVENTS OCCUR***
*/

//test code
// const phrase = new Phrase('Sex is GREAT');
// console.log(`Phrase - phrase: ${phrase.phrase}`);
// const game = new Game();

const game = new Game();

game.phrases.forEach((phrase, index) => {
  console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
