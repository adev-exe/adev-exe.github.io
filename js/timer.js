var eventStartDate = new Date("Apr 8, 2022 8:00:00").getTime();
var eventEndDate = new Date("Apr 10, 2022 17:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var StartDistance = eventStartDate - now;
  var EndDistance = eventEndDate - now;

  if(StartDistance > 0){

    Distance = StartDistance;
    document.getElementById("message").innerHTML = "<h2>ECU Spark Starts In...</h2>";

  }

  else if(StartDistance < 0 && EndDistance > 0){

    Distance = EndDistance;
    document.getElementById("message").innerHTML = "<h2>ECU Spark Ends In...</h2>";

  }

  else{

    clearInterval(x);
    document.getElementById("timer").innerHTML = "<h2>Time Is Up!</h2>";

  }

  var days = Math.floor(Distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((Distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((Distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}, 1000);