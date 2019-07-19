$(document).ready(function () {
    var windowW;
    $(window).resize(function () {
        windowW = $(window).width();
        if (windowW >= 992) {
            $('#js-menu-btn').removeClass('open');
            $('#js-menu').removeAttr('style');
            $('.js-submenu').removeAttr('style');
        }
    });
    $(window).trigger('resize');
   
    //scroll menu
    var menu = $('#js-menu-wrapper');
    var menuTop = menu.offset().top;
    $(window).scroll(function () {
        fixMenu();
    });
    fixMenu();
    function fixMenu() {
        if ($(window).scrollTop() >= menuTop) {
            menu.addClass('fixed');
        } else {
            menu.removeClass('fixed');
        }
    }
    
    //mobile menu
    $('#js-menu-btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('#js-menu').slideToggle();
    });
    $('.js-submenu-btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).next('.js-submenu').slideToggle();
    });
   
    //welcome-slider
    if ($('*').is('#js-welcome-slider')) {
        $('#js-welcome-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            //autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            prevArrow: '<button type="button" class="slick-prev"><span>Назад</span></button>',
            nextArrow: '<button type="button" class="slick-next"><span>Вперед</span></button>',
            dots: true
        });
    }
   
    //news-slider
    if ($('*').is('.js-news-slider')) {
        $('.js-news-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            prevArrow: '<button type="button" class="slick-prev"><span>Назад</span></button>',
            nextArrow: '<button type="button" class="slick-next"><span>Вперед</span></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    
    //articles-slider
    if ($('*').is('.js-articles-slider')) {
        $('.js-articles-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            prevArrow: '<button type="button" class="slick-prev"><span>Назад</span></button>',
            nextArrow: '<button type="button" class="slick-next"><span>Вперед</span></button>',
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
   
    //goods-slider
    if ($('*').is('.js-goods-slider')) {
        $('.js-goods-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            prevArrow: '<button type="button" class="slick-prev"><span>Назад</span></button>',
            nextArrow: '<button type="button" class="slick-next"><span>Вперед</span></button>',
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
   
    //photo-gallery-slider
    if ($('*').is('.js-photo-gallery-slider')) {
        $('.js-photo-gallery-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            prevArrow: '<button type="button" class="slick-prev"><span>Назад</span></button>',
            nextArrow: '<button type="button" class="slick-next"><span>Вперед</span></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    
    //video-gallery-slider
    if ($('*').is('.js-video-gallery-slider')) {
        $('.js-video-gallery-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            prevArrow: '<button type="button" class="slick-prev"><span>Назад</span></button>',
            nextArrow: '<button type="button" class="slick-next"><span>Вперед</span></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
   
    //clients-slider
    if ($('*').is('.js-clients-slider')) {
        $('.js-clients-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            prevArrow: '<button type="button" class="slick-prev"><span>Назад</span></button>',
            nextArrow: '<button type="button" class="slick-next"><span>Вперед</span></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
   
    //hidden-content
    $('.js-btn-show').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.js-hidden-content').slideToggle();
    });
   
    //gallery
    if ($('*').is('.js-photo-gallery')) {
        $('.js-photo-gallery').fancybox({
            padding: 0
        });
    }
    if ($('*').is('.js-video-gallery')) {
        $('.js-video-gallery').fancybox({
            padding: 0,
            helpers: {
                media: {}
            }
        });
    }
    if ($('*').is('.js-review-gallery')) {
        $('.js-review-gallery').fancybox({
            padding: 0
        });
    }
    
    //select
    if ($('*').is('select')) {
        $('select').fancySelect();
    }
   
    //input [type="file"]
    $('.js-file').change(function () {
        var file = $(this),
            fileValue = file.val(),
            label = file.next('.js-file-label');
        console.log(fileValue);
        if (fileValue !== '') {
            label.text(fileValue);
        }
    });
   
    //catalog layout
    $('#js-catalog-list-rows-btn').click(function () {
        $(this).addClass('active');
        $(this).siblings('#js-catalog-list-cols-btn').removeClass('active');
        $('.catalog-list').addClass('catalog-list-rows');
        $('.catalog-list .card-wrapper-small').removeClass('col-sm-6 col-md-4');
    });
    $('#js-catalog-list-cols-btn').click(function () {
        $(this).addClass('active');
        $(this).siblings('#js-catalog-list-rows-btn').removeClass('active');
        $('.catalog-list').removeClass('catalog-list-rows');
        $('.catalog-list .card-wrapper-small').addClass('col-sm-6 col-md-4');
    });
   
    //product-page-slider
    if ($('*').is('#js-product-page-slider-big') && $('*').is('#js-product-page-slider-small')) {
        $('#js-product-page-slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '#js-product-page-slider-small'
        });
        $('#js-product-page-slider-small').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '#js-product-page-slider-big',
            focusOnSelect: true,
            prevArrow: '<button type="button" class="slick-prev"><span>Назад</span></button>',
            nextArrow: '<button type="button" class="slick-next"><span>Вперед</span></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 441,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }
   
    //accordion
    if ($('*').is('.js-accordion-btn')) {
        var accordionLink = $('.js-accordion-btn');
        var accordionContent = $('.js-accordion-content');
        $(accordionLink).click(function (e) {
            e.preventDefault();
            var currentAccordionLink = $(this);
            let currentAccordionContent = currentAccordionLink.next(accordionContent);
            currentAccordionLink.toggleClass('active');
            $(currentAccordionContent).slideToggle();
            currentAccordionLink.not(currentAccordionLink).removeClass('active');
            accordionContent.not(currentAccordionContent).slideUp(600);
        });
    }
    
    //range-slider
    if ($('*').is('.js-ion-range-slider')) {
        var rangeSlider = $('.js-ion-range-slider'),
            rangeSliderFrom = rangeSlider.closest('.form-group').find('.js-range-min'),
            rangeSliderTo = rangeSlider.closest('.form-group').find('.js-range-max'),
            rangeSliderMin = rangeSlider.data('min'),
            rangeSliderMax = rangeSlider.data('max'),
            range,
            from,
            to;
        var updateValues = function (elem) {
            rangeSlider = $(elem);
            rangeSliderFrom = $(elem).closest('.form-group').find('.js-range-min');
            rangeSliderTo = $(elem).closest('.form-group').find('.js-range-max');
            $(rangeSliderFrom).prop("value", from);
            $(rangeSliderTo).prop("value", to);
        };
        rangeSlider.ionRangeSlider({
            type: "double",
            hide_min_max: true,
            force_edges: true,
            prettify_enabled: false,
            onChange: function (data) {
                from = data.from;
                to = data.to;
                updateValues(data.input);
            }
        });
        range = rangeSlider.data("ionRangeSlider");
        var updateRange = function (from, to) {
            range.update({
                from: from,
                to: to
            });
        };
        $(rangeSliderFrom).on("change", function (event) {
            to = $(event.target).closest('.form-group').find('.js-range-max').prop("value");
            from = +$(this).prop("value");
            if (from < rangeSliderMin) {
                from = rangeSliderMin;
            }
            if (from > rangeSliderMax) {
                from = rangeSliderMax;
            }
            if (to >= 1 && from > to) {
                from = to;
            }
            var target = $(event.target).closest('.form-group').find('.js-ion-range-slider');
            updateValues(target);
            range = $(target).data("ionRangeSlider");
            updateRange(from, to);
        });
        $(rangeSliderTo).on("change", function (event) {
            from = $(event.target).closest('.form-group').find('.js-range-min').prop("value");
            to = +$(this).prop("value");
            if (to > rangeSliderMax) {
                to = rangeSliderMax;
            }
            if (to < rangeSliderMin) {
                to = rangeSliderMin;
            }
            if (from >= 1 && to < from) {
                to = from;
            }
            var target = $(event.target).closest('.form-group').find('.js-ion-range-slider');
            updateValues(target);
            range = $(target).data("ionRangeSlider");
            updateRange(from, to);
        });
    }
});
