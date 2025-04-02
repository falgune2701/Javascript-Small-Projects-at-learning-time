const clock = document.getElementById('clock');
setInterval(function(){
    // here setInterval function continue execute depending on interval value
    let date = new Date;
    clock.innerHTML = date.toLocaleTimeString();
} ,1000)