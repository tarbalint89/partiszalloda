var header 		= $("header");
var nav			= $("nav");
var headerPos 	= header.position().top;
$(window).on("scroll", function() {
	if($(window).scrollTop() > 50){
		$("#logo").css("margin","2rem 0");
		header.css("height","10rem");
		nav.css("height","10rem");
	} else {
		$("#logo").css("margin","0");
		header.css("height","20rem");
		nav.css("height","20rem");
	}
});