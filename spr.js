const humanScore = document.querySelector(".hoomanscore");
const computerScore = document.querySelector(".computerscore");
const humanChoice = document.querySelector(".player-selection");
const computerChoice = document.querySelector(".computer-selection");
const tie = document.querySelector(".tie");
const btns = document.querySelectorAll("button");
const spr = ['ROCK', 'PAPER', 'SCISSSOR']
let randomindex = Math.floor(Math.random() * spr.length);
let randomchoice = spr[randomindex];


const showChoice = () => {
    btns[0].onclick = () => {
        humanChoice.innerHTML = '';
        humanChoice.innerHTML = 'PAPER';
    }
    btns[1].onclick = () => {
        humanChoice.innerHTML = '';
        humanChoice.innerHTML = 'ROCK';
    }
    btns[2].onclick = () => {
        humanChoice.innerHTML = '';
        humanChoice.innerHTML = 'SCISSOR';
    }
}
