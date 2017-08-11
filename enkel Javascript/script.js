// five different ways to select "My best header"

var byID = document.getElementById("first");
var byClass = document.getElementsByClassName("special")[0];
var byName = document.getElementsByTagName("h1")[0];
var byQuery = document.querySelector("h1");
var byQueryAll = document.querySelectorAll("h1")[0];

// Change color with button

var button = document.querySelector("button");
var isMagenta = false;
button.addEventListener("click", function(){
	if (isMagenta){
		document.body.style.background = '#ffffff';
	}else{
		document.body.style.background = '#f900f9';
	}
	isMagenta = !isMagenta;
});