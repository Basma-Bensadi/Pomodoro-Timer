let display = document.getElementById("timer");

let startbtn = document.getElementById("start")
let pausebtn = document.getElementById("pause")
let resetbtn = document.getElementById("reset")
let timeinterval;
let time = 1500; 
let isrunning = false;


startbtn.addEventListener("click",timestart)
pausebtn.addEventListener("click",timepause)
resetbtn.addEventListener("click",resettime)
function timestart(){
    if(isrunning)return;
    isrunning = true ; 
    timeinterval = setInterval(() => {
        time -= 1;
        let minutes = Math.floor(time/60)
        let seconds = (time % 60).toString().padStart(2, '0');
        display.innerHTML = `${minutes}:${seconds}`
        if(time === 0){
            clearInterval(timeinterval)
        }
    }, 1000);
}

function timepause(){
    clearInterval(timeinterval)
    isrunning = false

}

function resettime(){
    clearInterval(timeinterval)
    time = 1500;
    let minutes = Math.floor(time/60)
    let seconds = (time % 60).toString().padStart(2, '0');
    display.innerHTML =  `${minutes}:${seconds}`
    isrunning = false
}
