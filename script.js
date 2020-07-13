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



// ROOMS SLIDESHOW

function hideSlideShow() {
	$("#slideshow").css("display","none");
}
var room;
function roomName(x) {
	room = x;
	alert(room);
}
function slideShow(img) {
	var image = "url('mgs/"+img+".jpg') no-repeat center"
	$("#slideshow").css("display","block");
	var roomBig = "#"+room+".big";
	$(room).css("display","block");
	$(roomBig).css("background",image);
}