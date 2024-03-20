// 1. Do you have a variable that generates a random number? Line 15
// 2. Is the player's answer submitted with the submit button? 
// 3. Can the player see how many guesses they have made?
// 4. Do you have a function that checks the player's guess?
// 5. Does the if else statement congratulate the player? 
// 6. Does the function stop if the player is correct?
// 7. Does the if else statement tell the player if they are incorrect?
// 8. Does the game give the player a hint?
// 9. Does game restart when the restart button is pressed?
// 10. Does the game prompt the player to visit the About page to send feedback?
// 11. Does the contact form on About page submit an email to your prof email?


// Answer to 1: Creates a random number
const genNum = Math.floor(Math.random()* 10) +1;
console.log(genNum);

let resetButton;

// Answer to 2:
// Answer to 3: 
// Answer to 4:
function checkAnswer() {

   const userGuess = document.querySelector('.guess');
   let sendButton = document.querySelector('.guessResults');
   sendGuess.addEventListener('click', checkAnswer);
  // let userAnswer = guessResults.value;
   
   if (userGuess === genNum){
         console.log("You got it right! You are one super spy. The secret is: Anya's favorite food is peanuts.");
         guessResults.textContent = "You got it right! You are one super spy. The secret is: Anya's favorite food is peanuts.";
   } else if (userGuess > genNum) {
         console.log('Your guess was too low. You are not a spy!');
         guessResults.textContent = 'Your guess was too low. You are not a spy!';
   } else if (userGuess < genNum){
         console.log('Your guess was too high. You are not a spy!');
         guessResults.textContent = 'Your guess was too high. You are not a spy!';
   }

  

}


// Answer to 5:
// Answer to 6:
// Answer to 7: 
// Answer to 8:
// Answer to 9:
// Answer to 10:
// Answer to 11:


