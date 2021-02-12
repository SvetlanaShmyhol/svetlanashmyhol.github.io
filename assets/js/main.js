/*
$(document).ready(function(){
	$('.header-navbar__btn').click(function(){
		$(this).toggleClass('active');
	});
});
*/


$(document).ready(function () {

  $('.header-navbar__btn').on('click', function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').stop(true, true).slideToggle(1000);
  });

});
