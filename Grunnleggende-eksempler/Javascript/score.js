var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1Score");
var p2Display = document.getElementById("p2Score");
var numinput = document.querySelector("input[type='number']");
var p1Score = 0;
var p2Score = 0;
var gameover = false;
var winningScore = 5;
var winscoreDisplay =document.getElementById("winscore");

p1Button.addEventListener("click", function(){
	if(!gameover){
		p1Score++;
		if(p1Score === winningScore){
			gameover = true;
			p1Display.classList.add("winner");
		}
		p1Display.textContent = p1Score;
	}
	
});

p2Button.addEventListener("click", function(){
	if(!gameover){
		p2Score++;
		if(p2Score === winningScore){
			gameover = true;
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

numinput.addEventListener("change", function(){
	document.getElementById("winscore").textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameover = false;
}