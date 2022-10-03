const addLoadEvent = (func) => {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    return (window.onload = func);
  } else {
    return (window.onload = function () {
      oldonload();
      func();
    });
  }
};
// Global variables
const time_el = document.querySelector("#watch ,.time");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;
// Event listeners
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

// Update the timer
function timer() {
  seconds++;
  //   counter++
  // Format our time
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;
  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;
  time_el.innerText = `${hrs}:${mins}:${secs}`;
  if (hrs === setHours && mins === setMinutes && secs === setSeconds) {
    alarm();
  }
}

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  time_el.innerText = "00:00:00";
}

const alarm = () => {
  let div = document.getElementById("watch");
  let audio = document.createElement("audio");
  audio.controls = "controls";
  audio.id = "audio";
  let source = document.createElement("source");
  source.setAttribute("src", "Burna-Boy-Last-Last-(TrendyBeatz.com).mp3");
  source.setAttribute("type", "audio/mp3");
  audio.appendChild(source);
  div.appendChild(audio);
};
const set = () => {
  let div = document.getElementById("set");
  console, log(div);
};
// let setHours;
// let setMinutes;
// let setSeconds;
