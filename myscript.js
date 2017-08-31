$(document).ready(function() {
	$("h1").click(function() {
		$("img").slideToggle("slow");
		$("p").css("color","blue")
	});
});