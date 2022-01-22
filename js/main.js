window.onload = function () {
    let seconds = 00; 
    let milliseconds = 00; 
    let appendmilliseconds = document.getElementById("milliseconds")
    const appendSeconds = document.getElementById("second")
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    let Interval ;
    
    // start the timer
    start.onclick = function() {
       Interval = setInterval(startTimer, 10);
    }

    // stop the timer
    stop.onclick = function() {
        clearInterval(Interval);
    }

    // reset the timer
    reset.onclick = function() {
        clearInterval(Interval);
        milliseconds = "00";
        seconds = "00";
        appendmilliseconds.innerHTML = milliseconds;
        appendSeconds.innerHTML = seconds;
    }

    // start timer on resume and from start 
    function startTimer () {
      milliseconds++; 
      if(milliseconds <= 9){
        appendmilliseconds.innerHTML = "0" + milliseconds;
      }
      if (milliseconds > 9){
        appendmilliseconds.innerHTML = milliseconds;
      } 
      if (milliseconds > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        milliseconds = 0;
        appendmilliseconds.innerHTML = "0" + 0;
      }
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    }
}