var breakTime = $("#breakTime").text(),
  workTime = $("#workTime").text(),
  breakMinusButton = $("#breakMinus"),
  breakPlusButton = $("#breakPlus"),
  workMinusButton = $("#workMinus"),
  workPlusButton = $("#workPlus"),
  minutes = workTime,
  seconds = 0,
  running = false,
  counter,
  audio = new Audio('boop.mp3');

function beep() {
  audio.play();
};

breakMinusButton.on("click", function(){
  if (breakTime > 1){
    breakTime--;
    $("#breakTime").text(breakTime);
  }
});

breakPlusButton.on("click", function(){
  if (breakTime > 1){
    breakTime++;
    $("#breakTime").text(breakTime);
  }
});

workMinusButton.on("click", function(){
  if (workTime > 1){
    workTime--;
    minutes--;
    $("#workTime").text(workTime);
    $("#minutes").text(workTime);
  }
});

workPlusButton.on("click", function(){
  if (workTime > 1){
    workTime++;
    minutes++;
    $("#workTime").text(workTime);
    $("#minutes").text(workTime);
  }
});

// Timer -----------------------------

var countdown = function(){
  var title = $("#timerCircle h3"),
      timer = $("#timer");

      if (minutes === 0 && seconds === 1) {
        beep();
      }

  if (minutes === 0 && seconds === 0) {
    if (title.text() === "Work") {
      title.text("Break");
      minutes = breakTime;
      timer.html(minutes + ":0" + seconds)
    } else if (title.text() === "Break") {
      title.text("Work");
      minutes = workTime;
      timer.html(minutes = ":0" + seconds)
    }
  } else {
    if (seconds === 0) {seconds = 60; minutes--}
      seconds--;
      if (seconds < 10) {timer.html(minutes + ":0" + seconds);
    } else {
      timer.html(minutes + ":" + seconds);
    }
  }
};

var playPause = function(){

    $("#start").text("Pause");
    $("#timerCircle h3").text("Work");
    if (running === false) {
      counter = setInterval(countdown, 1000);
      running = true;
    } else if (running === true) {
      $("#start").text("Resume");
      clearInterval(counter);
      running = false;
    }
}
$("#start").click(playPause);
$("#timerCircle").click(playPause);
