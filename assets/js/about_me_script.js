$(document).ready(function(){
	
$(window).load(function() {
		$(".se-pre-con").fadeOut(600);;
	});
	
$("#container").hover(function(){
  		 $('.cover_img_scaled').addClass("cover_img_hover_jquery");

    });

$("#arrow-down").click(function(){
  
  $('html, body').animate({scrollTop:$('#aboutdown').offset().top}, 'slow');

    return false;

    });


});