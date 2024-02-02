let userScore = 0;
let copmScore = 0;

const choices = document.querySelectorAll(".ch1");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore =document.querySelector("#comp-score");

const generatecompChoice = () =>{
    const option = ["rock", "paper", "scissor"];
    return  option[Math.floor(Math.random()*3)];
}

const drawGame = () =>{
    console.log("game draw");
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        console.log(`you win! Your ${userChoice} beats  ${compChoice}`);
        msg.innerText = `you win! Your ${userChoice} beats  ${compChoice}`;
        msg.style.backgroundColor = "green";
           
    }
    else{
        copmScore++;
        cScore.innerText = copmScore;
        console.log("computer wins");
        msg.innerText = `Computer win!  ${userChoice} beats  Your ${compChoice}`;
        msg.style.backgroundColor = "red";  
    }
}
const playGame = (userChoice) => {
    console.log("user choice :",userChoice);
    //generate computer choice
    const compChoice = generatecompChoice();
    console.log("computer choice :",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissor , paper

           userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissor
           userWin =  compChoice === "scissor" ? false : true;
        }
        else if(userChoice === "scissor"){
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((ch1) => {
    ch1.addEventListener("click", () => {
        const   userChoice = ch1.getAttribute("id");
        console.log("choice is cliked", userChoice);
        playGame(userChoice);
    });
});