/* ==== THEME TOGGLE ==== */
const toggleBtn = document.querySelector(".theme-toggle");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.innerText = "Light Mode";
  } else {
    toggleBtn.innerText = "Dark Mode";
  }
});








/* ==== DATE & TIME ==== */
const dateSection = document.querySelector(".normal-date");
const timeSection = document.querySelector(".normal-time");

function showDateTime() {
  let now = new Date();
  dateSection.innerText = now.toDateString();  
  timeSection.innerText = now.toLocaleTimeString();
}

showDateTime();
setInterval(showDateTime, 1000);










/* ==== TIMER ==== */
const timerInput = document.querySelector(".timer-input");
const timerStart = document.querySelector(".timer-start");
const timerTime = document.querySelector(".timer-time");

let timerInterval;
let timerValue = 0;

timerStart.addEventListener("click", function () {
  clearInterval(timerInterval);

  timerValue = parseInt(timerInput.value);

  if (isNaN(timerValue) || timerValue <= 0) {
    timerTime.innerText = "Enter valid Input";
    return;
  }

  timerTime.innerText = timerValue + "s";

  timerInterval = setInterval(function () {
    timerValue--;
    if (timerValue <= 0) {
      clearInterval(timerInterval);
      timerTime.innerText = "Time's up!";
    } else {
      timerTime.innerText = timerValue + "s";
    }
  }, 1000);
});












/* ==== STOPWATCH ==== */
const swTime = document.querySelector(".stopwatch-time");
const swStart = document.querySelector(".stopwatch-start");
const swPause = document.querySelector(".stopwatch-pause");
const swStop = document.querySelector(".stopwatch-stop");
const swDetail = document.querySelector(".stopwatch-detail");

let swInterval;
let swSeconds = 0;

function updateStopwatch() {
  let hrs = Math.floor(swSeconds / 3600);
  let mins = Math.floor((swSeconds % 3600) / 60);
  let secs = swSeconds % 60;

  if (hrs < 10) hrs = "0" + hrs;
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) secs = "0" + secs;

  swTime.innerText = hrs + ":" + mins + ":" + secs;
}

swStart.addEventListener("click", function () {
  clearInterval(swInterval);
  swSeconds++;        
  updateStopwatch(); 
  swInterval = setInterval(function () {
    swSeconds++;
    updateStopwatch();
  }, 1000);
});

swPause.addEventListener("click", function () {
  clearInterval(swInterval);

  let li = document.createElement("li");
  li.innerText = "Paused at: " + swTime.innerText;
  swDetail.appendChild(li);
});

swStop.addEventListener("click", function () {
  clearInterval(swInterval);
  swSeconds = 0;
  swTime.innerText = "00:00:00";
  swDetail.innerHTML = "";
});
