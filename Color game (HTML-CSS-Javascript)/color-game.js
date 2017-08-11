var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var  resetButton = document.querySelector("#reset");
var modeButtons =document.querySelectorAll(".mode");

init();

function init () {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// if (this.textContent === "Easy") {
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }
			reset()
		})
	}
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function () {
			//grab color of picked square
			var clickedColor = this.style.backgroundColor;
			console.log(clickedColor)
			//compare color to picked color
			if (clickedColor === pickedColor) {
				changeColors(clickedColor);
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				h1.style.background = clickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = "Try again";
			}
		})
	}
	reset();
}



function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colordisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = 'steelblue';
}

// easyButton.addEventListener("click", function () {
// 	this.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
		
// 	}
// })

// hardButton.addEventListener("click", function () {
// 	this.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
		
// })


resetButton.addEventListener("click", function () {
	reset();
});

colorDisplay.textContent = pickedColor;


function changeColors (color){
	//loop through all the squares
	for (var i = 0; i < squares.length; i++) {
	//change each color to match given color
	squares[i].style.background = color;
	}
}

function pickColor () {
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generateRandomColors (num) {
	// make an array
	var arr = []
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return array
	return arr

}

function randomColor () {
	var r = Math.floor(Math.random()*256)
	var g = Math.floor(Math.random()*256)
	var b = Math.floor(Math.random()*256)

	return "rgb(" + r + ", " + g + ", " + b + ")";
}