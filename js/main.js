let counter = 0;

let num = document.querySelector(".num h1");

let btnPlus = document.querySelector(".btn"); 

let btnMinus = document.querySelector(".btn1");

btnPlus.addEventListener("click", function() { 
  counter++; 
  num.innerText = counter; 
});

btnMinus.addEventListener("click", function() { 
  counter--; 
  num.innerText = counter; 
});




// timer
let timer = document.querySelector('.timer h1');
let startBtn = document.querySelector('.btn2');
let stopBtn = document.querySelector('.btn3');

let count = 0;
let timerInterval;

function updateTimer() {
    let minutes = Math.floor(count / 60).toString().padStart(2, '0');
    let seconds = (count % 60).toString().padStart(2, '0');
    timer.textContent = `${minutes}:${seconds}`;
    count++;
}

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    count = 0;
    timer.textContent = '00:00';
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);