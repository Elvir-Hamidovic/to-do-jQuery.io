
//checka av specifika todos mha click

$("ul").on("click","li", function () {

	$(this).toggleClass("completed");

});

//klicka på ikonen för att ta bort toDo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();

	
}) ;

//när man trycker enter så läggs till en ny påminnelse
$("input[type='text']").keypress(function(event){
	if (event.which ===13){
		//ta ny toDo text från input
		var toDoText = $(this).val();
		$(this).val("");
		// skapa en ny li och lägg till i ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + toDoText + "</li>");
	}

});

//toggla på/av på plus-ikonen och dölj "add new to-Do"
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});