/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


/*
 * Game.js is used to create a Game class,
 * Methods for starting and ending the game,
 * Handling interactions,
 * Getting a random phrase,
 * Checking for a win, and
 * Removing a life from the scoreboard
*/

 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }

   /*
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
   */
   createPhrases(){
     return [
     new Phrase('Rip and Tear'),
     new Phrase('Now this is Podracing'),
     new Phrase('Keep your stupid comments in your pocket'),
     new Phrase('Miyazaki is a Sweety'),
     new Phrase('My Dad Works At NINTENDO')
    ];
   }

   /*
    * Selects random phrase from the phrases property
    * @return {Object} Phrase object chosen to be used
   */
   getRandomPhrase(){
     const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
     return randomPhrase;
   }

   startGame(){

   }

   handleInteraction(){

   }

   removeLife(){

   }

   checkForWin(){

   }

   gameOver(){

   }
 }
