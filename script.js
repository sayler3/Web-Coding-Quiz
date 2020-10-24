var timerCount = 100;
var timerEl = document.querySelector("#countdown");

timerEl.textContent = timerCount;

var timer = window.setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;

    if (timerCount === 0) {
        clearInterval(timer)
    }
}, 1000)