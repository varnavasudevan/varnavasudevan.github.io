


 $(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow':'visible'});
        })
 
$(document).ready(function(){

	
$("#tinkeringpage").click(function(){
  

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href')).offset().top
    }, 300);

    

    return false;

    });



});