$(document).ready(function() {

	$(window).on('resize', function() {
        windowW = $(window).width();
        if (windowW >= 767) {
            $('#menu').removeAttr('style');
        }
    });

    $(window).scroll(function(e) {
        if ($(window).scrollTop() >= 100) {
            $('.header-phone-hidden').addClass('hidden');
            $('#header-logo').addClass('header-logo-active');
        } else {
            $('.header-phone-hidden').removeClass('hidden');
            $('#header-logo').removeClass('header-logo-active');
        }
    });

    $('[href*="#contacts"]').on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 300);
    });

    $('.menu-mobile__bar').click(function(e) {
        e.preventDefault();
        $('#menu').slideToggle();
    });

	$('.main-slider__slick').slick({
		prevArrow: '<div class="main-slider__prev"></div>',
		nextArrow: '<div class="main-slider__next"></div>'
	});

});