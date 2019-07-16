$(document).ready(function() {

var magic8Ball = {};
magic8Ball.messages = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", " Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

magic8Ball.askQuestion = function() {

    prompt("Ask me anything!");
	var index = Math.floor((Math.random() * this.messages.length()));
	var answer = this.messages[index];
    console.log(answer);
    $("#answer").text(answer);
};


$("#questionButton").click(magic8Ball.askQuestion);


});