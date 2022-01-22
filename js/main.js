window.onload = function () {
    var seconds = 00; 
    var milliseconds = 00; 
    var appendmilliseconds = document.getElementById("milliseconds")
    var appendSeconds = document.getElementById("second")
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    var Interval ;
    
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