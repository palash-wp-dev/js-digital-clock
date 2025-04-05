'use strict';

function updateTime() {
    const currentDate = new Date();

    
    let fullTime = currentDate.toLocaleTimeString();

    let fullDate = currentDate.toLocaleDateString();

    document.getElementById('date').innerText = fullDate;
    document.getElementById('clock').innerHTML = fullTime;

    // console.log(version);
}

setInterval(updateTime,1000);