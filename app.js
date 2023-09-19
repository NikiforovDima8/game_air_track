const startBtn = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const colbackBtn = document.querySelector('.colbackBC');
const colbackBtn1 = document.querySelector('.colback1');
const time = document.getElementById('time');
const timeBtn = document.querySelector('.time-list');
const board = document.querySelector('#board');
let times = 0;
let score=0

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

colbackBtn.addEventListener('click', () => {
    screens.classList.remove('up');
});

timeBtn.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        times = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', event=>{
  if(event.target.classList.contains('circle')){
score++
event.target.remove()
createRandomCircle()
  }
})

colbackBtn1.addEventListener('click', () => {
    screens.classList.remove('ups');
});


function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(times);
}

function decreaseTime() {
    if (times === 0) {
        finishGame();
    } else {
        let current = --times;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    time.innerHTML = `00:${value}`;
}

function finishGame() {
  time.parentNode.classList.add('hide')
  board.innerHTML=`<h1>Cчет: <span class='primary'>${score}</span></h1>`
    time.innerHTML = `00:00`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
     const size = getRandimNumber(10, 60);
     console.log(size)
    const qqq = board.getBoundingClientRect();
    console.log(qqq)
    const {width,height } = board.getBoundingClientRect();

    const x = getRandimNumber(0, width-size);
    const y = getRandimNumber(0, height-size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`; 

    board.append(circle);
}

function getRandimNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

