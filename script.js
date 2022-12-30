// Mini projet : Play the game
// Part 1
function playTheGame() {
    let usersAdvice = confirm("Do you like to play the game?");
    if(usersAdvice){
        let userNumber = prompt("Tip a number between 0 and 10 :");
        if(isNaN(userNumber))  {
            alert("Sorry Not a number, Goodbye");
        }
        else if(userNumber < 10 && userNumber >= 0) {
            let computerNumber = Math.random(0, 10).toFixed(0);
            compareNumbers(userNumber, computerNumber);
            console.log(computerNumber);
        }
        else {
            alert("Sorry it’s not a good number, Goodbye");
        }
    }else{
        alert("No problem, Goodbye");
    }
}

// Part 2
function compareNumbers(userNumber,computerNumber){
    const playerLife = 3;
    let i = 0
    do{
        if(userNumber == computerNumber) {
            alert("WINNER");
            return;
        }
        else if(userNumber > computerNumber) {
            alert("Your number is bigger then the computer’s, guess again");
            userNumber = prompt("Tip a number between 0 and 10 :");
            i++;
        }
        else {
            alert("our number is smaller then the computer’s, guess again");
            userNumber = prompt("Tip a number between 0 and 10 :");
            i++;
        }
    }
    while(i < playerLife)
}