let userScore = 0;
let compScore = 0;
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];    
}
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        console.log("you win!");
        msg.innerText = `you win! your${userChoice}beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
    console.log("you lose!");
    msg.innerText = `you lost. ${compChoice}beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    }
}
const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was draw. play again";
    msg.style.backgroundColor = "#081b31";

}

const playGame = (userChoice)=>{
    console.log("user choice =",userChoice);

    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);
    if(userChoice === compChoice){
        //draw game
        drawGame();  
    }

    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice ==="paper"?false : true;
        }
        else if(userChoice === "paper"){
            //scissors,rock
            userWin = compChoice === "scissors"?false : true;
        }
        else if(userChoice === "scissors"){
            //paper,rock
            userWin = compChoice ==="rock"?false : true;
        }
        showWinner(userWin);
    } 
}
choice.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
     playGame(userWin, userChoice, compChoice);
    })
})