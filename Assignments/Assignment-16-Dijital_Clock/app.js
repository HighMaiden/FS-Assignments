const display = document.querySelector('.ClockDisplay');

function showTime(){

let date = new Date()
console.log(date);
let hour = date.getHours()
let minutes = date.getMinutes()
let second = date.getSeconds()
let session='AM';
// let hour = new Date().getHours()
// let minutes = new Date().getMinutes()
// let second = new Date().getSeconds()


if(hour>12){
    session='PM'
    hour=hour-12;
}
if(hour< 10 ){
    hour='0'+hour
}
if(minutes< 10 ){
    hour='0'+hour
}if(second< 10 ){
    hour='0'+hour
}


display.innerHTML= hour + ':' + minutes + ':' +second +':'+session

};

setInterval(showTime,1000)