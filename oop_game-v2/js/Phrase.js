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

/*
 * Checks if passed letter is in phrase
 * @param (string) letter - Letter to check
*/
   checkLetter(letter){
     return this.phrase.includes(letter); 
   }

/*
 * Displays passed letter on screen after a match is found
 * @param (string) letter - Letter to display
*/
   showMatchedLetter(letter){
     const lettersInPhrase = document.querySelectorAll('#phrase li');
     for (let i = 0; i < lettersInPhrase.length; i++){
       if (lettersInPhrase[i].textContent === letter){
         lettersInPhrase[i].classList.remove('hide');
         lettersInPhrase[i].classList.add('show');
       }
     }
   }
 }
