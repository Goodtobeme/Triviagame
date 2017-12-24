function check() {

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

    if(question1 == "Chicago") {
      correct++;
    }
    if(question2 == "Springfield") {
      correct++;
    }
    if(question3 == "1905") {
      correct++;
    }

    var message = ["Excellent Job", "You are doing Ok", "Need to study your History More!"];
    var pictures = ["assets/images/win.gif", "assets/images/ha.gif", "assets/images/loser.gif"];

    var outlook;

    if (correct < 1) {
      outlook = 2;
    }

    if (correct > 0 && correct <3) {
      outlook = 1;
    }

    if (correct > 2) {
      outlook = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = message[outlook];
    document.getElementById("number_correct").innerHTML = " You got " + correct + " correct. ";
    document.getElementById("picture").src =pictures[outlook];

}
