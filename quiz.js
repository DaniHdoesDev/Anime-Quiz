const prompt = require("prompt-sync");
//Ask user for their name 
let quizTaker = prompt("Introduce yourself:");
    
    let response = quizTaker.ToLowerCase(`Hello + ${quizTaker}`);
console.log("Hello " + quizTaker);


