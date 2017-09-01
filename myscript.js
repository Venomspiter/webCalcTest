$(document).ready(function() {
	$("p").click(function() {
		$("img").slideDown("slow");
		$("h2").toggle();
		$("p").hide();
	});
});
