var hero = $('#hero');

hero.hide();

$('.video').hide();
$(function () {

   $('.video').show(function () {
   	  $('.video').addClass('animated slideIn');
   });
   
  

  hero.show(function () {
  	 hero.addClass('animated jello' );
  });



  $('.frames').on('click', function () {
    $('.iframes').toggleClass('video');
  });


});

function name (firstName, lastName, fullName) {
	 var person = {
	 	 firstName:firstName,
	 	 lastName:lastName,
	 	 fullName: fullName

	 }

	 return person;
}

var me  = name('Mohamed Ali', 'Barrie', 'Mohamed Ali Barrie');

console.log(me);

