$(document).ready(function(){
	
$(window).load(function() {
		$(".se-pre-con").fadeOut(600);;
	});
	
// $("#container").hover(function(){
//   		 $('.cover_img_scaled').addClass("cover_img_hover_jquery");

//     });

$(".arrowimage").click(function(){
  
  $('html, body').animate({scrollTop:$('#aboutdown').offset().top}, 'slow');

   return false;

    });

$(".logo_scaled").click(function(){
  
  $('html, body').animate({scrollTop:$('#videopage').offset().top}, 'slow');



    return false;

    });

$(".topbar-text-about").click(function(){
  
  $('html, body').animate({scrollTop:$('#aboutdown').offset().top}, 'slow');



    return false;

    });



});