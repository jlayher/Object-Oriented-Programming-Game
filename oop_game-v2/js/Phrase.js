/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/*
 * Phrase.js is used to create a Phrase class
 * The Phrase class is used to handle the creation of phrases
*/


 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }

   /*
    * Display phrase on game board
   */
   /*
    * Adds letter placeholders to the display when game starts
    * Each letter is an empty box.  One li for each letter
    * Note any id or class attributes needed
    * When player correctly guesses a letter, box is replaced with the letter * showMatchedLetter()
    * Use letter CSS class for letters and space CSS class for spaces

    * Split up (spread operator or split method with an empty string) each phrase into an array of characters?
    * forEach(character)
    * if character = letter
      * give it the id and classes needed
    * elseif character = space
      * give it the id and classes needed
   */
   addPhraseToDisplay(){
     const phraseUl = document.querySelector('#phrase ul');
     const phraseCharacters = this.phrase.split('');
     for (let i=0; i < phraseCharacters.length; i++){
       const character = document.createElement('li');
       if (phraseCharacters[i] === ' ') {
         character.textContent = phraseCharacters[i];
         character.className = 'space';
       }else{
         character.textContent = phraseCharacters[i];
         character.className = `hide letter ${phraseCharacters[i]}`;
       }
       phraseUl.appendChild(character);
       }
     }

   checkLetter(){

   }

   showMatchedLetter(){

   }
 }
