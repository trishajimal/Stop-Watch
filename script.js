let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let startButton = document.querySelector(".buttons img:nth-child(2)");
let stopButton = document.querySelector(".buttons img:nth-child(1)");
let resetButton = document.querySelector(".buttons img:nth-child(3)");
let timer = null;

function stopwatch() {
    seconds++;
    if(seconds === 60) {
        seconds = 0;
        minutes++;
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.innerHTML = `${hours < 10 ? "0" + hours : hours} : ${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
}


function watchStart() {
    if(timer!== null) {
        clearInterval(timer);
    }
     timer = setInterval(stopwatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}   

function watchReset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    display.innerHTML = "00 : 00 : 00";
}
    
