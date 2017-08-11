var allLI = document. querySelectorAll("li")

	for(var i = 0; i < allLI.length; i++){
		allLI[i].addEventListener("mouseover", function () {
		this.classList.add("selected");
	});
	allLI[i].addEventListener("mouseout", function () {
		this.classList.remove("selected");
	});
	allLI[i].addEventListener("click", function () {
		this.classList.toggle("done");
	});

}
