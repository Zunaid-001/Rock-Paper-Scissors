let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const compchoice = ()=>{
    const arr = ["rock","paper","scissors"];
    const random = Math.floor(Math.random()*3);
    return arr[random];
}
userScore = document.querySelector("#user-score");
compScore = document.querySelector("#comp-score");
const draw = () =>{
    msg.innerText = "IT'S A DRAW";
}
playGame = (userChoice) =>{
    const gencomp = compchoice();
    console.log(gencomp);
    if(userChoice === gencomp){
        draw();
        msg.style.backgroundColor = "#ffd6d6";
        msg.style.color = "#ff6f61";
    }else if((userChoice ==="rock" && gencomp === "scissors") || (userChoice === "paper" && gencomp === "rock")){
        userScore.innerText++;
        msg.innerText = `YOU WIN...! your ${userChoice} beats ${gencomp}` ;
        msg.style.backgroundColor = "#fff0e5";
        msg.style.color = "#ff6f61";
    }else if((userChoice === "scissors"&& gencomp ==="paper") || (userChoice === "rock"&& gencomp === "scissors")){
        userScore.innerText++;
        msg.innerText = `YOU WIN...! your ${userChoice} beats ${gencomp}`;
        msg.style.backgroundColor = "#fff0e5";
        msg.style.color = "ff6f61";
    }
    else{
        compScore.innerText++;
        msg.innerText = `YOU LOSE...! ${gencomp} beats your ${userChoice}`;
        msg.style.backgroundColor = "#ffb3b3";
        msg.style.color = "#8b000";
    }

}
choices.forEach((i) =>{
    i.addEventListener("click",() =>{
        const userChoice = i.getAttribute("id");
        playGame(userChoice);
    });
});