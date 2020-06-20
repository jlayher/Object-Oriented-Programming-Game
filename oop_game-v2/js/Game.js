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

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - the clicked button element
 */

   handleInteraction(letter){
     console.log(letter);
     letter.disabled = true;
     if(this.activePhrase.checkLetter(letter.textContent)){
       letter.classList.add('chosen');
       this.activePhrase.showMatchedLetter(letter.textContent);
       this.checkForWin();
     }else{
       letter.classList.add('wrong');
       this.removeLife();
       this.checkForWin();
     }
   }

/*
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't won
*/
   checkForWin(){
     const phraseLength = document.querySelectorAll('#phrase li').length;
     const spacesLength = document.querySelectorAll('#phrase .space').length;
     const lettersLength = phraseLength - spacesLength;
     const shownLength = document.querySelectorAll('#phrase .show').length;
     if(lettersLength === shownLength){
       this.gameOver();
     }
   }


/*
 * Increases the value of the missed property
 * Remove a life from the scoreboard
 * Checks if player has remaining lives and ends game is player is out
*/
   removeLife(){
     let heartPng = document.querySelectorAll('#scoreboard img');
     heartPng[this.missed].src="images/lostHeart.png";
     this.missed += 1;
     if (this.missed >= 5){
       this.gameOver();
     }
   }

/*
 * Displays game over message
 * @param {boolean} gameWon - Whether or not the user won the game
*/
   gameOver(gameWon){
     let message = document.querySelector('#game-over-message');
     let resetButton = document.querySelector('#btn__reset');
     let overlay = document.querySelector('#overlay');
     overlay.style.display = '';
     if (this.missed < 5){
       message.innerText = "Winner!";
       resetButton.innerText = "Another One!";
       overlay.classList.add('win');
     } else {
       message.innerText = "Oops! You'll Get It Next Time!";
       resetButton.innterText = "Give It Another Shot!";
       overlay.classList.add('lose');
     }
     this.resetGame();
   }

   resetGame(){
     this.missed=0
     let disabledButtons = document.querySelectorAll('#qwerty button[disabled]');
     for (let i=0; i<disabledButtons.length; i++){
       disabledButtons[i].disabled = false;
       disabledButtons[i].classList.add('key');
       disabledButtons[i].classList.remove('chosen');
       disabledButtons[i].classList.remove('wrong');
     }
     document.querySelectorAll('#scoreboard img').forEach(png =>{png.src='images/liveHeart.png'});
     const phraseUl = document.querySelector('#phrase ul');
     for(let i = 0; i<phraseUl.length; i++){
       phraseUl.removeChild(phraseUl.firstChild);
     }

   }

 }
