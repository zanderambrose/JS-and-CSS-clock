let secondHand = document.querySelector('.secondHand');
let minuteHand = document.querySelector('.minuteHand');
let hourhand = document.querySelector('.hourHand');

function getSeconds() {
    setInterval(function () {
        let currentDate = new Date();
        let seconds = currentDate.getSeconds();

        let secondsDegrees = (seconds * 6) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }, 1000)
}

function getMinutes() {
    setInterval(function () {
        let currentDate = new Date();
        let minutes = currentDate.getMinutes();
        let minutesDegrees = (minutes * 6) + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    }, 1000)
}

function getHours() {
    setInterval(function () {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let hoursDegrees = (hours * 30) + 90;
        hourhand.style.transform = `rotate(${hoursDegrees}deg)`;
    }, 1000)
}




getSeconds();
getMinutes();
getHours();


