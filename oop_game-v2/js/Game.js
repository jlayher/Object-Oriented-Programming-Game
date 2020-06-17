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

   /*
    * Begins game by selecting a random phrase and displaying it to user
   */
   startGame(){
     const startScreen = document.getElementById('overlay');
     startScreen.style.display = 'none';
     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
   }



   handleInteraction(letter){
     const clicked = letter;
     //check phrase for match ** checkLetter() method in Phrase.js
        //if there IS A match, the letter must be displayed on screen instead of the placeholder
        // call showMatchedLetter()

        //if there is NO match, the game must remove a life from the scoreboard

        //check if player won the game.  if all letters in phrase are revealed, gameWon = true ? (so does gameWon need to be null unless a specific true or false condition is met?)
        //check if player lost the game.  if player is out of lives, gameWon = false and is fed to gameOver method ?
   }

/*
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't won
*/
// check to see if player has shown all of the letters in the active phrase
 // split active phrase into an array of single letters
 // itterate over the array of letters
    // if all letters have the class name show, or if no letters have the hidden class...
      // then checkForWin returns True
    // else checkForWin returns False
   checkForWin(){
     const lettersInPhrase = document.querySelectorAll('#phrase li');
     let spaceLi = 0;
     let shownLi = 0;

     for (let i = 0; i < lettersInPhrase.length; i++){
       if(lettersInPhrase[i].classList.contains('show')){
        shownLi += 1;
       }else if(lettersInPhrase[i].classList.contains('space')){
        shownLi += 1;
       }
   }
   if (shownLi >= lettersInPhrase.length){
   return true;
 } else {
   return false;
 }
 }


/*
 * Increases the value of the missed property
 * Remove a life from the scoreboard
 * Checks if player has remaining lives and ends game is player is out
*/
   removeLife(){

   }

/*
 * Displays game over message
 * @param {boolean} gameWon - Whether or not the user won the game
*/
   gameOver(gameWon){

   }
 }
