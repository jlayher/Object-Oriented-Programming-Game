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

   checkLetter(){

   }

   showMatchedLetter(){

   }
 }
