let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")

const userscorePara = document.querySelector("#user-score")
const compscorePara = document.querySelector("#comp-score")

const gencomputerchoice = () => {
    const options = ["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random() * 3)
    return options[randIdx]

}

const drawGame = () => {
    msg.innerText = "its a draw. play again!!!"
    msg.style.backgroundColor = "blue"
}

const showWinner = (userWin,userchoice,compchoice) => {
    if (userWin) {
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `you win!!! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green"
    } else {
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `you lost, ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userchoice) => {
     const compchoice = gencomputerchoice();

     if(userchoice === compchoice){
        drawGame();
     } else {
        let userWin = true;
        if(userchoice === "rock") {
           userwin =  compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
     }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice= choice.getAttribute("id");
        playGame(userchoice)
    })
})

