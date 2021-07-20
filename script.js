const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const numbers = document.querySelectorAll(".numbers")

// find the total second from a specific date
let cdDate = (new Date (2021, 7, 30).getTime())/1000;
let today = (new Date().getTime())/1000;
let distanceSeconds = cdDate - today;

let startingDay = Math.floor(distanceSeconds/(60*60*24));
startingDay <10 ? days.textContent = `0${startingDay}` : days.textContent = startingDay;
distanceSeconds = distanceSeconds-(startingDay*60*60*24);

let startingHours = Math.floor(distanceSeconds/(60*60));
startingHours <10 ? hours.textContent = `0${startingHours}` : hours.textContent = startingHours;
distanceSeconds = distanceSeconds-(startingHours*60*60);

let startingMinutes = Math.floor(distanceSeconds/(60));
startingMinutes <10 ? minutes.textContent = `0${startingMinutes}` : minutes.textContent = startingMinutes;

let startingSeconds = Math.floor(distanceSeconds-(startingMinutes*60));
seconds.textContent = startingSeconds;
startingSeconds <10 ? seconds.textContent = `0${startingSeconds}` : seconds.textContent = startingSeconds;

let createSpan = () => {

    numbers.forEach(element => {
        let spanBefore = document.createElement("span")
        spanBefore.classList.add("before")
    
        let spanAfter = document.createElement("span")
        spanAfter.classList.add("after")
    
        element.append(spanBefore);
        element.append(spanAfter);
    })

}

let countDownSeconds = () => {
    seconds.textContent == 0 ? startingSeconds = 59 : startingSeconds--;
    startingSeconds <10 ? seconds.textContent = `0${startingSeconds}` : seconds.textContent = startingSeconds;
}

let countDownMinutes = () => {
    if(seconds.textContent == 59) {
        minutes.textContent == 0 ? startingMinutes = 59 : startingMinutes--;
        startingMinutes <10 ? minutes.textContent = `0${startingMinutes}` : minutes.textContent = startingMinutes;
    }
}

let countDownHours = () => {
    if(minutes.textContent==59){
        hours.textContent == 0? startingHours = 23 : startingHours--;
        startingHours <10 ? hours.textContent = `0${startingHours}` : hours.textContent = startingHours;
    }
}

let countDownDays = () => {
    if(days.textContent==0 & hours.textContent==0 & minutes.textContent == 0 & seconds.textContent == 0){
        clearInterval(countDown);
    }
    hours.textContent == 23 ? startingDay-- : startingDay = startingDay;
    startingDay <10 ? days.textContent = `0${startingDay}` : days.textContent = startingDay;
}

function allCountDown(){
    countDownSeconds();
    countDownMinutes();
    countDownHours();
    countDownDays();
    createSpan();
}

const countDown = setInterval(allCountDown,1000)
