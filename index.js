setInterval(() => {
    d = new Date();
    hourTime = d.getHours();
    minuteTime = d.getMinutes();
    secondTime = d.getSeconds();
    hourRotation = 30*hourTime + minuteTime/2;
    minuteRotation = 6*minuteTime;
    secondRotation = 6*secondTime;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);