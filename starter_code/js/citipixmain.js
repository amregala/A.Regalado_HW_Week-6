$(document).ready(function() {

function submit() {
	event.preventDefault();
var  	inputny = ["New York", "ny", "NYC" , "New York City"],
		inputsf =	["San Francisco", "SF", "Bay Area"],
		inputla = ["LAX", "LA"],
		inputtexas = ["Austin", "ATX"],
		inputaustralia = ["Sydney", "SYD"],
		city = $("input[type=text]").val().toLowerCase();
	
	if (city == "new york" || city == "ny" || city == "nyc" || city == "new york city") {
			$("body").css("background", "url(start_code/../images/nyc.jpg)")
;}
	else if (city == "san francisco" || city == "sf" || city == "bay area") {
			$("body").css("background", "url(start_code/../images/sf.jpg)")
;}
	else if (city ==  "lax" || city == "la") {
			$("body").css("background", "url(start_code/../images/la.jpg)")
;}
	else if (city == "austin" || city == "atx") {
			$("body").css("background", "url(start_code/../images/austin.jpg)")

;}
	else if (city == "sydney" || city == "syd") {
			$("body").css("background", "url(start_code/../images/sydney.jpg)")
;} else {
	$("body").css("background", "url(start_code/../images/citipix_skyline.jpg)")
}
}
$("input[type=submit]").on("click", submit);

});

