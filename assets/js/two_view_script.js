$(document).ready(function(){

	$(window).load(function() {
		$(".se-pre-con").fadeOut(1000);;
	});
	
$(".topbar-text-tinkering").click(function(){
  
  $('html, body').animate({scrollTop:$('#tinkeringpage').offset().top}, 'slow');

    return false;

    });

$(".topbar-text-projects").click(function(){

  $('html, body').animate({scrollTop:$('#projectspage').offset().top}, 'slow');

  return false;

    });






});

