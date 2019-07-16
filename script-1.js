
$(document).ready(function() {

    $("#answer").hide();

    var magic8Ball = {};
    magic8Ball.messages = ["It is certain.", "Yes - definitely.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Cannot predict now.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
    magic8Ball.askQuestion = function() {
        prompt("ASK A YES/NO QUESTION!");
        $("#8ball").effect("shake");
        var index = Math.floor((Math.random() * this.messages.length));
        var answer = this.messages[index];
        console.log(answer);
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        $("#answer").text(answer);
        $("#answer").fadeIn(1500);
        
        
    };

    var pressButton = function() {
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
        setTimeout(
            function() {
                magic8Ball.askQuestion();
            }, 500);
    };

    $("#questionButton").click(pressButton);
  
});
