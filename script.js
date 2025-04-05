'use strict';

function updateTime() {
    const currentDate = new Date();

    // get the dates
    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    // get the hours
    let seconds = currentDate.getSeconds();
    let minutes = currentDate.getMinutes();
    let hours = currentDate.getHours();
    // let version = currentDate.get();

    let fullDate = date + '/' + month + '/' + year;
    let fullTime = hours +':'+ minutes + ' ' + seconds;

    document.getElementById('date').innerText = fullDate;
    document.getElementById('clock').innerHTML = fullTime;
}

setInterval(updateTime,1000);