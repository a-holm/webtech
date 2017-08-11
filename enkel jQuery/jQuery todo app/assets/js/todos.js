// Check off specific todos by clicking
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
})

//Click on X to delete Todo
$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(600, function (argument) {
		$(this).remove();
	});
	event.stopPropagation();
});

// Add new todo
$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>")
	}
});

//make pluss toggle the input
$(".fa-plus").click(function () {
	$("input[type='text']").fadeToggle();
});