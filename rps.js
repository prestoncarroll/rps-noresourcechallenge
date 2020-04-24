var slickArr = ["rock", "paper", "scissors"]

// var userChoice = prompt("rock, paper, or scissors?")
// console.log(userChoice);
// userGuess();



function userGuess() {

    var computerAnswer = slickArr[Math.floor(slickArr.length * Math.random())]
    console.log(computerAnswer);


    if (userChoice === "rock" && computerAnswer === "paper") {
        console.log("you lost")
    };
    if (userChoice === "rock" && computerAnswer === "scissors") {
        console.log("you won")
    };

    if (userChoice === "paper" && computerAnswer === "rock") {
        console.log("you won")
    };
    if (userChoice === "paper" && computerAnswer === "scissors") {
        console.log("you lost")
    };

    if (userChoice === "scissors" && computerAnswer === "rock") {
        console.log("you lost")
    };
    if (userChoice === "scissors" && computerAnswer === "paper") {
        console.log("you won")
    };




    if (userChoice === computerAnswer) {
        console.log("it was a tie");
    };





}










